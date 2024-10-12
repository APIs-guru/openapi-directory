# openapi_client.SubscriptionDiagnosticSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_diagnostic_settings_create_or_update**](SubscriptionDiagnosticSettingsApi.md#subscription_diagnostic_settings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings/{name} | 
[**subscription_diagnostic_settings_delete**](SubscriptionDiagnosticSettingsApi.md#subscription_diagnostic_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings/{name} | 
[**subscription_diagnostic_settings_get**](SubscriptionDiagnosticSettingsApi.md#subscription_diagnostic_settings_get) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings/{name} | 
[**subscription_diagnostic_settings_list**](SubscriptionDiagnosticSettingsApi.md#subscription_diagnostic_settings_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings | 


# **subscription_diagnostic_settings_create_or_update**
> SubscriptionDiagnosticSettingsResource subscription_diagnostic_settings_create_or_update(subscription_id, api_version, name, parameters)



Creates or updates subscription diagnostic settings for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_diagnostic_settings_resource import SubscriptionDiagnosticSettingsResource
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
    api_instance = openapi_client.SubscriptionDiagnosticSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.
    parameters = openapi_client.SubscriptionDiagnosticSettingsResource() # SubscriptionDiagnosticSettingsResource | Parameters supplied to the operation.

    try:
        api_response = api_instance.subscription_diagnostic_settings_create_or_update(subscription_id, api_version, name, parameters)
        print("The response of SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 
 **parameters** | [**SubscriptionDiagnosticSettingsResource**](SubscriptionDiagnosticSettingsResource.md)| Parameters supplied to the operation. | 

### Return type

[**SubscriptionDiagnosticSettingsResource**](SubscriptionDiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to create a subscription diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_diagnostic_settings_delete**
> subscription_diagnostic_settings_delete(subscription_id, api_version, name)



Deletes existing subscription diagnostic settings for the specified resource.

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
    api_instance = openapi_client.SubscriptionDiagnosticSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.

    try:
        api_instance.subscription_diagnostic_settings_delete(subscription_id, api_version, name)
    except Exception as e:
        print("Exception when calling SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 

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
**200** | Successful request to remove a subscription diagnostic setting |  -  |
**204** | Successful request to remove a subscription diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_diagnostic_settings_get**
> SubscriptionDiagnosticSettingsResource subscription_diagnostic_settings_get(subscription_id, api_version, name)



Gets the active subscription diagnostic settings for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_diagnostic_settings_resource import SubscriptionDiagnosticSettingsResource
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
    api_instance = openapi_client.SubscriptionDiagnosticSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.

    try:
        api_response = api_instance.subscription_diagnostic_settings_get(subscription_id, api_version, name)
        print("The response of SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 

### Return type

[**SubscriptionDiagnosticSettingsResource**](SubscriptionDiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about diagnostic setting. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_diagnostic_settings_list**
> SubscriptionDiagnosticSettingsResourceCollection subscription_diagnostic_settings_list(subscription_id, api_version)



Gets the active subscription diagnostic settings list for the specified subscriptionId.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_diagnostic_settings_resource_collection import SubscriptionDiagnosticSettingsResourceCollection
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
    api_instance = openapi_client.SubscriptionDiagnosticSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.subscription_diagnostic_settings_list(subscription_id, api_version)
        print("The response of SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionDiagnosticSettingsApi->subscription_diagnostic_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**SubscriptionDiagnosticSettingsResourceCollection**](SubscriptionDiagnosticSettingsResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about subscription diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

