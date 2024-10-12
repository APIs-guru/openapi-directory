# openapi_client.AutoscaleSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autoscale_settings_create_or_update**](AutoscaleSettingsApi.md#autoscale_settings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName} | 
[**autoscale_settings_delete**](AutoscaleSettingsApi.md#autoscale_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName} | 
[**autoscale_settings_get**](AutoscaleSettingsApi.md#autoscale_settings_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName} | 
[**autoscale_settings_list_by_resource_group**](AutoscaleSettingsApi.md#autoscale_settings_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings | 
[**autoscale_settings_list_by_subscription**](AutoscaleSettingsApi.md#autoscale_settings_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/autoscalesettings | 


# **autoscale_settings_create_or_update**
> AutoscaleSettingResource autoscale_settings_create_or_update(resource_group_name, autoscale_setting_name, api_version, subscription_id, parameters)



Creates or updates an autoscale setting.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.autoscale_setting_resource import AutoscaleSettingResource
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
    api_instance = openapi_client.AutoscaleSettingsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    autoscale_setting_name = 'autoscale_setting_name_example' # str | The autoscale setting name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    parameters = openapi_client.AutoscaleSettingResource() # AutoscaleSettingResource | Parameters supplied to the operation.

    try:
        api_response = api_instance.autoscale_settings_create_or_update(resource_group_name, autoscale_setting_name, api_version, subscription_id, parameters)
        print("The response of AutoscaleSettingsApi->autoscale_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoscaleSettingsApi->autoscale_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **autoscale_setting_name** | **str**| The autoscale setting name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **parameters** | [**AutoscaleSettingResource**](AutoscaleSettingResource.md)| Parameters supplied to the operation. | 

### Return type

[**AutoscaleSettingResource**](AutoscaleSettingResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to create or update an autoscale setting |  -  |
**201** | Created autoscale setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **autoscale_settings_delete**
> autoscale_settings_delete(resource_group_name, autoscale_setting_name, api_version, subscription_id)



Deletes and autoscale setting

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.AutoscaleSettingsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    autoscale_setting_name = 'autoscale_setting_name_example' # str | The autoscale setting name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_instance.autoscale_settings_delete(resource_group_name, autoscale_setting_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AutoscaleSettingsApi->autoscale_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **autoscale_setting_name** | **str**| The autoscale setting name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to delete an autoscale setting |  -  |
**204** | No content: Successful request to delete an autoscale setting, but the response is intentionally empty |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **autoscale_settings_get**
> AutoscaleSettingResource autoscale_settings_get(resource_group_name, autoscale_setting_name, api_version, subscription_id)



Gets an autoscale setting

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.autoscale_setting_resource import AutoscaleSettingResource
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
    api_instance = openapi_client.AutoscaleSettingsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    autoscale_setting_name = 'autoscale_setting_name_example' # str | The autoscale setting name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.autoscale_settings_get(resource_group_name, autoscale_setting_name, api_version, subscription_id)
        print("The response of AutoscaleSettingsApi->autoscale_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoscaleSettingsApi->autoscale_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **autoscale_setting_name** | **str**| The autoscale setting name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**AutoscaleSettingResource**](AutoscaleSettingResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get one autoscale setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **autoscale_settings_list_by_resource_group**
> AutoscaleSettingResourceCollection autoscale_settings_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists the autoscale settings for a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.autoscale_setting_resource_collection import AutoscaleSettingResourceCollection
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
    api_instance = openapi_client.AutoscaleSettingsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.autoscale_settings_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of AutoscaleSettingsApi->autoscale_settings_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoscaleSettingsApi->autoscale_settings_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**AutoscaleSettingResourceCollection**](AutoscaleSettingResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of autoscale settings |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **autoscale_settings_list_by_subscription**
> AutoscaleSettingResourceCollection autoscale_settings_list_by_subscription(api_version, subscription_id)



Lists the autoscale settings for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.autoscale_setting_resource_collection import AutoscaleSettingResourceCollection
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
    api_instance = openapi_client.AutoscaleSettingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.autoscale_settings_list_by_subscription(api_version, subscription_id)
        print("The response of AutoscaleSettingsApi->autoscale_settings_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoscaleSettingsApi->autoscale_settings_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**AutoscaleSettingResourceCollection**](AutoscaleSettingResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of autoscale settings |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

