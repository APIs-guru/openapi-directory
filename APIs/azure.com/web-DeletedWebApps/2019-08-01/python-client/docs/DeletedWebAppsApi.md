# openapi_client.DeletedWebAppsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleted_web_apps_get_deleted_web_app_by_location**](DeletedWebAppsApi.md#deleted_web_apps_get_deleted_web_app_by_location) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites/{deletedSiteId} | Get deleted app for a subscription at location.
[**deleted_web_apps_list**](DeletedWebAppsApi.md#deleted_web_apps_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/deletedSites | Get all deleted apps for a subscription.
[**deleted_web_apps_list_by_location**](DeletedWebAppsApi.md#deleted_web_apps_list_by_location) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites | Get all deleted apps for a subscription at location


# **deleted_web_apps_get_deleted_web_app_by_location**
> DeletedWebAppsGetDeletedWebAppByLocation200Response deleted_web_apps_get_deleted_web_app_by_location(location, deleted_site_id, subscription_id, api_version)

Get deleted app for a subscription at location.

Description for Get deleted app for a subscription at location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deleted_web_apps_get_deleted_web_app_by_location200_response import DeletedWebAppsGetDeletedWebAppByLocation200Response
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
    api_instance = openapi_client.DeletedWebAppsApi(api_client)
    location = 'location_example' # str | 
    deleted_site_id = 'deleted_site_id_example' # str | The numeric ID of the deleted app, e.g. 12345
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get deleted app for a subscription at location.
        api_response = api_instance.deleted_web_apps_get_deleted_web_app_by_location(location, deleted_site_id, subscription_id, api_version)
        print("The response of DeletedWebAppsApi->deleted_web_apps_get_deleted_web_app_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedWebAppsApi->deleted_web_apps_get_deleted_web_app_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**|  | 
 **deleted_site_id** | **str**| The numeric ID of the deleted app, e.g. 12345 | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DeletedWebAppsGetDeletedWebAppByLocation200Response**](DeletedWebAppsGetDeletedWebAppByLocation200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleted_web_apps_list**
> DeletedWebAppCollection deleted_web_apps_list(subscription_id, api_version)

Get all deleted apps for a subscription.

Description for Get all deleted apps for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deleted_web_app_collection import DeletedWebAppCollection
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
    api_instance = openapi_client.DeletedWebAppsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all deleted apps for a subscription.
        api_response = api_instance.deleted_web_apps_list(subscription_id, api_version)
        print("The response of DeletedWebAppsApi->deleted_web_apps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedWebAppsApi->deleted_web_apps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DeletedWebAppCollection**](DeletedWebAppCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleted_web_apps_list_by_location**
> DeletedWebAppCollection deleted_web_apps_list_by_location(location, subscription_id, api_version)

Get all deleted apps for a subscription at location

Description for Get all deleted apps for a subscription at location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deleted_web_app_collection import DeletedWebAppCollection
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
    api_instance = openapi_client.DeletedWebAppsApi(api_client)
    location = 'location_example' # str | 
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all deleted apps for a subscription at location
        api_response = api_instance.deleted_web_apps_list_by_location(location, subscription_id, api_version)
        print("The response of DeletedWebAppsApi->deleted_web_apps_list_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedWebAppsApi->deleted_web_apps_list_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**|  | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DeletedWebAppCollection**](DeletedWebAppCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

