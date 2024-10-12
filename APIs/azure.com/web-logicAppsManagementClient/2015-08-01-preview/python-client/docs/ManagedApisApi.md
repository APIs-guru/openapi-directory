# openapi_client.ManagedApisApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_apis_get**](ManagedApisApi.md#managed_apis_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/managedApis/{apiName} | Get managed API
[**managed_apis_list**](ManagedApisApi.md#managed_apis_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/managedApis | List managed Apis


# **managed_apis_get**
> ApiEntity managed_apis_get(location, api_name, subscription_id, api_version, export=export)

Get managed API

Gets a managed API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_entity import ApiEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedApisApi(api_client)
    location = 'location_example' # str | The location.
    api_name = 'api_name_example' # str | The managed API name.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    export = True # bool | flag showing whether to export API definition in format specified by Accept header. (optional)

    try:
        # Get managed API
        api_response = api_instance.managed_apis_get(location, api_name, subscription_id, api_version, export=export)
        print("The response of ManagedApisApi->managed_apis_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedApisApi->managed_apis_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location. | 
 **api_name** | **str**| The managed API name. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **export** | **bool**| flag showing whether to export API definition in format specified by Accept header. | [optional] 

### Return type

[**ApiEntity**](ApiEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_apis_list**
> ApisCollection managed_apis_list(location, subscription_id, api_version)

List managed Apis

Gets a list of managed APIs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.apis_collection import ApisCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedApisApi(api_client)
    location = 'location_example' # str | The location.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List managed Apis
        api_response = api_instance.managed_apis_list(location, subscription_id, api_version)
        print("The response of ManagedApisApi->managed_apis_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedApisApi->managed_apis_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ApisCollection**](ApisCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

