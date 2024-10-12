# openapi_client.GuestConfigurationAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guest_configuration_assignments_delete**](GuestConfigurationAssignmentsApi.md#guest_configuration_assignments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName} | 


# **guest_configuration_assignments_delete**
> guest_configuration_assignments_delete(resource_group_name, guest_configuration_assignment_name, subscription_id, vm_name, api_version)



Delete a guest configuration assignment

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
    api_instance = openapi_client.GuestConfigurationAssignmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    guest_configuration_assignment_name = 'guest_configuration_assignment_name_example' # str | Name of the guest configuration assignment
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_name = 'vm_name_example' # str | The name of the virtual machine.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.guest_configuration_assignments_delete(resource_group_name, guest_configuration_assignment_name, subscription_id, vm_name, api_version)
    except Exception as e:
        print("Exception when calling GuestConfigurationAssignmentsApi->guest_configuration_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **guest_configuration_assignment_name** | **str**| Name of the guest configuration assignment | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client Api Version. | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

