# openapi_client.IntegrationServiceEnvironmentRestartApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_service_environments_restart**](IntegrationServiceEnvironmentRestartApi.md#integration_service_environments_restart) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/restart | 


# **integration_service_environments_restart**
> integration_service_environments_restart(subscription_id, resource_group, integration_service_environment_name, api_version)



Restarts an integration service environment.

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
    api_instance = openapi_client.IntegrationServiceEnvironmentRestartApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_service_environments_restart(subscription_id, resource_group, integration_service_environment_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentRestartApi->integration_service_environments_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

