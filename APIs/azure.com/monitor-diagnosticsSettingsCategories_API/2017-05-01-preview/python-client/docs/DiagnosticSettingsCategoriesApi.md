# openapi_client.DiagnosticSettingsCategoriesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diagnostic_settings_category_get**](DiagnosticSettingsCategoriesApi.md#diagnostic_settings_category_get) | **GET** /{resourceUri}/providers/microsoft.insights/diagnosticSettingsCategories/{name} | 
[**diagnostic_settings_category_list**](DiagnosticSettingsCategoriesApi.md#diagnostic_settings_category_list) | **GET** /{resourceUri}/providers/microsoft.insights/diagnosticSettingsCategories | 


# **diagnostic_settings_category_get**
> DiagnosticSettingsCategoryResource diagnostic_settings_category_get(resource_uri, api_version, name)



Gets the diagnostic settings category for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_settings_category_resource import DiagnosticSettingsCategoryResource
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
    api_instance = openapi_client.DiagnosticSettingsCategoriesApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.

    try:
        api_response = api_instance.diagnostic_settings_category_get(resource_uri, api_version, name)
        print("The response of DiagnosticSettingsCategoriesApi->diagnostic_settings_category_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticSettingsCategoriesApi->diagnostic_settings_category_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 

### Return type

[**DiagnosticSettingsCategoryResource**](DiagnosticSettingsCategoryResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about diagnostic setting category |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostic_settings_category_list**
> DiagnosticSettingsCategoryResourceCollection diagnostic_settings_category_list(resource_uri, api_version)



Lists the diagnostic settings categories for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_settings_category_resource_collection import DiagnosticSettingsCategoryResourceCollection
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
    api_instance = openapi_client.DiagnosticSettingsCategoriesApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.diagnostic_settings_category_list(resource_uri, api_version)
        print("The response of DiagnosticSettingsCategoriesApi->diagnostic_settings_category_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticSettingsCategoriesApi->diagnostic_settings_category_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiagnosticSettingsCategoryResourceCollection**](DiagnosticSettingsCategoryResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about diagnostic setting category |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

