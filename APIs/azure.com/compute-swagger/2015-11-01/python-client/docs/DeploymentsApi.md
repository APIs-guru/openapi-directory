# openapi_client.DeploymentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machines_quick_create**](DeploymentsApi.md#virtual_machines_quick_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 


# **virtual_machines_quick_create**
> DeploymentExtended virtual_machines_quick_create(resource_group_name, deployment_name, api_version, subscription_id, parameters=parameters)



Create a named template deployment using a template.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Deployment() # Deployment | Additional parameters supplied to the operation. (optional)

    try:
        api_response = api_instance.virtual_machines_quick_create(resource_group_name, deployment_name, api_version, subscription_id, parameters=parameters)
        print("The response of DeploymentsApi->virtual_machines_quick_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->virtual_machines_quick_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Deployment**](Deployment.md)| Additional parameters supplied to the operation. | [optional] 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

