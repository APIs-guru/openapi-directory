# openapi_client.CreateOrUpdateWebApplicationFirewallPolicyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policies_create_or_update**](CreateOrUpdateWebApplicationFirewallPolicyApi.md#policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName} | 


# **policies_create_or_update**
> WebApplicationFirewallPolicy policies_create_or_update(resource_group_name, policy_name, subscription_id, api_version, parameters)



Creates or update policy with specified rule set name within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.web_application_firewall_policy import WebApplicationFirewallPolicy
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
    api_instance = openapi_client.CreateOrUpdateWebApplicationFirewallPolicyApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    policy_name = 'policy_name_example' # str | The name of the resource group.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.WebApplicationFirewallPolicy() # WebApplicationFirewallPolicy | Policy to be created.

    try:
        api_response = api_instance.policies_create_or_update(resource_group_name, policy_name, subscription_id, api_version, parameters)
        print("The response of CreateOrUpdateWebApplicationFirewallPolicyApi->policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreateOrUpdateWebApplicationFirewallPolicyApi->policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **policy_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**WebApplicationFirewallPolicy**](WebApplicationFirewallPolicy.md)| Policy to be created. | 

### Return type

[**WebApplicationFirewallPolicy**](WebApplicationFirewallPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. The request has been fulfilled and a new protection policy has been created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

