# openapi_client.DBRPsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_dbrpid**](DBRPsApi.md#delete_dbrpid) | **DELETE** /dbrps/{dbrpID} | Delete a database retention policy
[**get_dbrps**](DBRPsApi.md#get_dbrps) | **GET** /dbrps | List all database retention policy mappings
[**get_dbrps_id**](DBRPsApi.md#get_dbrps_id) | **GET** /dbrps/{dbrpID} | Retrieve a database retention policy mapping
[**patch_dbrpid**](DBRPsApi.md#patch_dbrpid) | **PATCH** /dbrps/{dbrpID} | Update a database retention policy mapping
[**post_dbrp**](DBRPsApi.md#post_dbrp) | **POST** /dbrps | Add a database retention policy mapping


# **delete_dbrpid**
> delete_dbrpid(org_id, dbrp_id, zap_trace_span=zap_trace_span)

Delete a database retention policy

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DBRPsApi(api_client)
    org_id = 'org_id_example' # str | Specifies the organization ID of the mapping
    dbrp_id = 'dbrp_id_example' # str | The database retention policy mapping
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a database retention policy
        api_instance.delete_dbrpid(org_id, dbrp_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DBRPsApi->delete_dbrpid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Specifies the organization ID of the mapping | 
 **dbrp_id** | **str**| The database retention policy mapping | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**400** | if any of the IDs passed is invalid |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dbrps**
> DBRPs get_dbrps(org_id, zap_trace_span=zap_trace_span, id=id, bucket_id=bucket_id, default=default, db=db, rp=rp)

List all database retention policy mappings

### Example


```python
import openapi_client
from openapi_client.models.dbrps import DBRPs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DBRPsApi(api_client)
    org_id = 'org_id_example' # str | Specifies the organization ID to filter on
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    id = 'id_example' # str | Specifies the mapping ID to filter on (optional)
    bucket_id = 'bucket_id_example' # str | Specifies the bucket ID to filter on (optional)
    default = True # bool | Specifies filtering on default (optional)
    db = 'db_example' # str | Specifies the database to filter on (optional)
    rp = 'rp_example' # str | Specifies the retention policy to filter on (optional)

    try:
        # List all database retention policy mappings
        api_response = api_instance.get_dbrps(org_id, zap_trace_span=zap_trace_span, id=id, bucket_id=bucket_id, default=default, db=db, rp=rp)
        print("The response of DBRPsApi->get_dbrps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DBRPsApi->get_dbrps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Specifies the organization ID to filter on | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **id** | **str**| Specifies the mapping ID to filter on | [optional] 
 **bucket_id** | **str**| Specifies the bucket ID to filter on | [optional] 
 **default** | **bool**| Specifies filtering on default | [optional] 
 **db** | **str**| Specifies the database to filter on | [optional] 
 **rp** | **str**| Specifies the retention policy to filter on | [optional] 

### Return type

[**DBRPs**](DBRPs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all database retention policy mappings |  -  |
**400** | if any of the parameter passed is invalid |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dbrps_id**
> DBRP get_dbrps_id(org_id, dbrp_id, zap_trace_span=zap_trace_span)

Retrieve a database retention policy mapping

### Example


```python
import openapi_client
from openapi_client.models.dbrp import DBRP
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DBRPsApi(api_client)
    org_id = 'org_id_example' # str | Specifies the organization ID of the mapping
    dbrp_id = 'dbrp_id_example' # str | The database retention policy mapping ID
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a database retention policy mapping
        api_response = api_instance.get_dbrps_id(org_id, dbrp_id, zap_trace_span=zap_trace_span)
        print("The response of DBRPsApi->get_dbrps_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DBRPsApi->get_dbrps_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Specifies the organization ID of the mapping | 
 **dbrp_id** | **str**| The database retention policy mapping ID | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**DBRP**](DBRP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The database retention policy requested |  -  |
**400** | if any of the IDs passed is invalid |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_dbrpid**
> DBRP patch_dbrpid(org_id, dbrp_id, dbrp_update, zap_trace_span=zap_trace_span)

Update a database retention policy mapping

### Example


```python
import openapi_client
from openapi_client.models.dbrp import DBRP
from openapi_client.models.dbrp_update import DBRPUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DBRPsApi(api_client)
    org_id = 'org_id_example' # str | Specifies the organization ID of the mapping
    dbrp_id = 'dbrp_id_example' # str | The database retention policy mapping.
    dbrp_update = openapi_client.DBRPUpdate() # DBRPUpdate | Database retention policy update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a database retention policy mapping
        api_response = api_instance.patch_dbrpid(org_id, dbrp_id, dbrp_update, zap_trace_span=zap_trace_span)
        print("The response of DBRPsApi->patch_dbrpid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DBRPsApi->patch_dbrpid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Specifies the organization ID of the mapping | 
 **dbrp_id** | **str**| The database retention policy mapping. | 
 **dbrp_update** | [**DBRPUpdate**](DBRPUpdate.md)| Database retention policy update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**DBRP**](DBRP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated mapping |  -  |
**400** | if any of the IDs passed is invalid |  -  |
**404** | The mapping was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_dbrp**
> DBRP post_dbrp(dbrp, zap_trace_span=zap_trace_span)

Add a database retention policy mapping

### Example


```python
import openapi_client
from openapi_client.models.dbrp import DBRP
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DBRPsApi(api_client)
    dbrp = openapi_client.DBRP() # DBRP | The database retention policy mapping to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a database retention policy mapping
        api_response = api_instance.post_dbrp(dbrp, zap_trace_span=zap_trace_span)
        print("The response of DBRPsApi->post_dbrp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DBRPsApi->post_dbrp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbrp** | [**DBRP**](DBRP.md)| The database retention policy mapping to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**DBRP**](DBRP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Database retention policy mapping created |  -  |
**400** | if any of the IDs in the mapping is invalid |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

