# openapi_client.GuestConfigurationAssignmentReportsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guest_configuration_assignment_reports_get**](GuestConfigurationAssignmentReportsApi.md#guest_configuration_assignment_reports_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports/{reportId} | 
[**guest_configuration_assignment_reports_list**](GuestConfigurationAssignmentReportsApi.md#guest_configuration_assignment_reports_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports | 


# **guest_configuration_assignment_reports_get**
> GuestConfigurationAssignmentReport guest_configuration_assignment_reports_get(resource_group_name, guest_configuration_assignment_name, report_id, subscription_id, vm_name, api_version)



Get a report for the guest configuration assignment, by reportId.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_configuration_assignment_report import GuestConfigurationAssignmentReport
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
    api_instance = openapi_client.GuestConfigurationAssignmentReportsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    guest_configuration_assignment_name = 'guest_configuration_assignment_name_example' # str | The guest configuration assignment name.
    report_id = 'report_id_example' # str | The GUID for the guest configuration assignment report.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_name = 'vm_name_example' # str | The name of the virtual machine.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.guest_configuration_assignment_reports_get(resource_group_name, guest_configuration_assignment_name, report_id, subscription_id, vm_name, api_version)
        print("The response of GuestConfigurationAssignmentReportsApi->guest_configuration_assignment_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestConfigurationAssignmentReportsApi->guest_configuration_assignment_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **guest_configuration_assignment_name** | **str**| The guest configuration assignment name. | 
 **report_id** | **str**| The GUID for the guest configuration assignment report. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestConfigurationAssignmentReport**](GuestConfigurationAssignmentReport.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. This response is due one of these two reasons: 1. Report was returned successfully 2. Guest configuration assignment was found, but VM is not registered yet, hence no report was returned. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guest_configuration_assignment_reports_list**
> GuestConfigurationAssignmentReportList guest_configuration_assignment_reports_list(resource_group_name, guest_configuration_assignment_name, subscription_id, vm_name, api_version)



List all reports for the guest configuration assignment, latest report first.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.guest_configuration_assignment_report_list import GuestConfigurationAssignmentReportList
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
    api_instance = openapi_client.GuestConfigurationAssignmentReportsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    guest_configuration_assignment_name = 'guest_configuration_assignment_name_example' # str | The guest configuration assignment name.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_name = 'vm_name_example' # str | The name of the virtual machine.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.guest_configuration_assignment_reports_list(resource_group_name, guest_configuration_assignment_name, subscription_id, vm_name, api_version)
        print("The response of GuestConfigurationAssignmentReportsApi->guest_configuration_assignment_reports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestConfigurationAssignmentReportsApi->guest_configuration_assignment_reports_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **guest_configuration_assignment_name** | **str**| The guest configuration assignment name. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GuestConfigurationAssignmentReportList**](GuestConfigurationAssignmentReportList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. This response is due one of these two reasons: 1. Reports were returned successfully 2. Guest configuration assignment was found, but VM is not registered yet, hence no reports returned. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

