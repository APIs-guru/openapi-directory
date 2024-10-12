# openapi_client.RoutingAppCoveragesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routing_app_coverages_create_instance**](RoutingAppCoveragesApi.md#routing_app_coverages_create_instance) | **POST** /v1/routingAppCoverages | 
[**routing_app_coverages_delete_instance**](RoutingAppCoveragesApi.md#routing_app_coverages_delete_instance) | **DELETE** /v1/routingAppCoverages/{id} | 
[**routing_app_coverages_get_instance**](RoutingAppCoveragesApi.md#routing_app_coverages_get_instance) | **GET** /v1/routingAppCoverages/{id} | 
[**routing_app_coverages_update_instance**](RoutingAppCoveragesApi.md#routing_app_coverages_update_instance) | **PATCH** /v1/routingAppCoverages/{id} | 


# **routing_app_coverages_create_instance**
> RoutingAppCoverageResponse routing_app_coverages_create_instance(routing_app_coverage_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.routing_app_coverage_create_request import RoutingAppCoverageCreateRequest
from openapi_client.models.routing_app_coverage_response import RoutingAppCoverageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoutingAppCoveragesApi(api_client)
    routing_app_coverage_create_request = openapi_client.RoutingAppCoverageCreateRequest() # RoutingAppCoverageCreateRequest | RoutingAppCoverage representation

    try:
        api_response = api_instance.routing_app_coverages_create_instance(routing_app_coverage_create_request)
        print("The response of RoutingAppCoveragesApi->routing_app_coverages_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingAppCoveragesApi->routing_app_coverages_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routing_app_coverage_create_request** | [**RoutingAppCoverageCreateRequest**](RoutingAppCoverageCreateRequest.md)| RoutingAppCoverage representation | 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single RoutingAppCoverage |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routing_app_coverages_delete_instance**
> routing_app_coverages_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoutingAppCoveragesApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.routing_app_coverages_delete_instance(id)
    except Exception as e:
        print("Exception when calling RoutingAppCoveragesApi->routing_app_coverages_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routing_app_coverages_get_instance**
> RoutingAppCoverageResponse routing_app_coverages_get_instance(id, fields_routing_app_coverages=fields_routing_app_coverages, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.routing_app_coverage_response import RoutingAppCoverageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoutingAppCoveragesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_routing_app_coverages = ['fields_routing_app_coverages_example'] # List[str] | the fields to include for returned resources of type routingAppCoverages (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.routing_app_coverages_get_instance(id, fields_routing_app_coverages=fields_routing_app_coverages, include=include)
        print("The response of RoutingAppCoveragesApi->routing_app_coverages_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingAppCoveragesApi->routing_app_coverages_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_routing_app_coverages** | [**List[str]**](str.md)| the fields to include for returned resources of type routingAppCoverages | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single RoutingAppCoverage |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routing_app_coverages_update_instance**
> RoutingAppCoverageResponse routing_app_coverages_update_instance(id, routing_app_coverage_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.routing_app_coverage_response import RoutingAppCoverageResponse
from openapi_client.models.routing_app_coverage_update_request import RoutingAppCoverageUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoutingAppCoveragesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    routing_app_coverage_update_request = openapi_client.RoutingAppCoverageUpdateRequest() # RoutingAppCoverageUpdateRequest | RoutingAppCoverage representation

    try:
        api_response = api_instance.routing_app_coverages_update_instance(id, routing_app_coverage_update_request)
        print("The response of RoutingAppCoveragesApi->routing_app_coverages_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingAppCoveragesApi->routing_app_coverages_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **routing_app_coverage_update_request** | [**RoutingAppCoverageUpdateRequest**](RoutingAppCoverageUpdateRequest.md)| RoutingAppCoverage representation | 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single RoutingAppCoverage |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

