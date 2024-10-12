# openapi_client.ConnectorsApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_connector**](ConnectorsApi.md#delete_connector) | **DELETE** /v1/connectors/{id} | 
[**get_connector**](ConnectorsApi.md#get_connector) | **GET** /v1/connectors/{id} | 
[**get_connectors**](ConnectorsApi.md#get_connectors) | **GET** /v1/connectors | 
[**patch_connector**](ConnectorsApi.md#patch_connector) | **PATCH** /v1/connectors/{id} | 
[**post_connectors**](ConnectorsApi.md#post_connectors) | **POST** /v1/connectors | 


# **delete_connector**
> delete_connector(id)



Delete a connector

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    id = 'id_example' # str | The connector id that needs to be deleted

    try:
        api_instance.delete_connector(id)
    except Exception as e:
        print("Exception when calling ConnectorsApi->delete_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The connector id that needs to be deleted | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the deleted connector object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_connector**
> get_connector(id, include_evse=include_evse, include_organization=include_organization, include_rate=include_rate)



Get a connector

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    id = 'id_example' # str | ID of connector that needs to be fetched
    include_evse = True # bool | Populate evse (optional)
    include_organization = True # bool | Populate organization (optional)
    include_rate = True # bool | Populate rate (optional)

    try:
        api_instance.get_connector(id, include_evse=include_evse, include_organization=include_organization, include_rate=include_rate)
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of connector that needs to be fetched | 
 **include_evse** | **bool**| Populate evse | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 
 **include_rate** | **bool**| Populate rate | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a connector object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_connectors**
> get_connectors(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_evse=include_evse, include_organization=include_organization, include_rate=include_rate)



List connectors

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_evse = True # bool | Populate evse (optional)
    include_organization = True # bool | Populate organization (optional)
    include_rate = True # bool | Populate rate (optional)

    try:
        api_instance.get_connectors(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_evse=include_evse, include_organization=include_organization, include_rate=include_rate)
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_evse** | **bool**| Populate evse | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 
 **include_rate** | **bool**| Populate rate | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of connector objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_connector**
> PatchChargeStation200Response patch_connector(id, post_connectors_request)



Update a connector's data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.post_connectors_request import PostConnectorsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    id = 'id_example' # str | ID of connector that needs to be updated
    post_connectors_request = openapi_client.PostConnectorsRequest() # PostConnectorsRequest | Include connector properties to update here

    try:
        api_response = api_instance.patch_connector(id, post_connectors_request)
        print("The response of ConnectorsApi->patch_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsApi->patch_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of connector that needs to be updated | 
 **post_connectors_request** | [**PostConnectorsRequest**](PostConnectorsRequest.md)| Include connector properties to update here | 

### Return type

[**PatchChargeStation200Response**](PatchChargeStation200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the updated connector object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_connectors**
> PatchChargeStation200Response post_connectors(post_connectors_request)



Create a new connector

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.post_connectors_request import PostConnectorsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    post_connectors_request = openapi_client.PostConnectorsRequest() # PostConnectorsRequest | Include Connector properties to create here

    try:
        api_response = api_instance.post_connectors(post_connectors_request)
        print("The response of ConnectorsApi->post_connectors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsApi->post_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_connectors_request** | [**PostConnectorsRequest**](PostConnectorsRequest.md)| Include Connector properties to create here | 

### Return type

[**PatchChargeStation200Response**](PatchChargeStation200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the new connector object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

