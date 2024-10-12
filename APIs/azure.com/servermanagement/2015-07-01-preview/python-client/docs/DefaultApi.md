# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gateway_update**](DefaultApi.md#gateway_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName} | 


# **gateway_update**
> GatewayResource gateway_update(subscription_id, api_version, resource_group_name, gateway_name, gateway_parameters)



Updates a gateway belonging to a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_parameters import GatewayParameters
from openapi_client.models.gateway_resource import GatewayResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).
    gateway_parameters = openapi_client.GatewayParameters() # GatewayParameters | Parameters supplied to the Update operation.

    try:
        api_response = api_instance.gateway_update(subscription_id, api_version, resource_group_name, gateway_name, gateway_parameters)
        print("The response of DefaultApi->gateway_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gateway_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 
 **gateway_parameters** | [**GatewayParameters**](GatewayParameters.md)| Parameters supplied to the Update operation. | 

### Return type

[**GatewayResource**](GatewayResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

