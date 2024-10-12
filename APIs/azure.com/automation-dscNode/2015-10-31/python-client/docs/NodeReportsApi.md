# openapi_client.NodeReportsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**node_reports_get**](NodeReportsApi.md#node_reports_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId} | 
[**node_reports_get_content**](NodeReportsApi.md#node_reports_get_content) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}/content | 
[**node_reports_list_by_node**](NodeReportsApi.md#node_reports_list_by_node) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports | 


# **node_reports_get**
> DscNodeReport node_reports_get(resource_group_name, automation_account_name, node_id, report_id, subscription_id, api_version)



Retrieve the Dsc node report data by node id and report id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_node_report import DscNodeReport
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
    api_instance = openapi_client.NodeReportsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    node_id = 'node_id_example' # str | The Dsc node id.
    report_id = 'report_id_example' # str | The report id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.node_reports_get(resource_group_name, automation_account_name, node_id, report_id, subscription_id, api_version)
        print("The response of NodeReportsApi->node_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeReportsApi->node_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **node_id** | **str**| The Dsc node id. | 
 **report_id** | **str**| The report id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscNodeReport**](DscNodeReport.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_reports_get_content**
> object node_reports_get_content(resource_group_name, automation_account_name, node_id, report_id, subscription_id, api_version)



Retrieve the Dsc node reports by node id and report id.

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
    api_instance = openapi_client.NodeReportsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    node_id = 'node_id_example' # str | The Dsc node id.
    report_id = 'report_id_example' # str | The report id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.node_reports_get_content(resource_group_name, automation_account_name, node_id, report_id, subscription_id, api_version)
        print("The response of NodeReportsApi->node_reports_get_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeReportsApi->node_reports_get_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **node_id** | **str**| The Dsc node id. | 
 **report_id** | **str**| The report id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_reports_list_by_node**
> DscNodeReportListResult node_reports_list_by_node(resource_group_name, automation_account_name, node_id, subscription_id, api_version, filter=filter)



Retrieve the Dsc node report list by node id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_node_report_list_result import DscNodeReportListResult
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
    api_instance = openapi_client.NodeReportsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    node_id = 'node_id_example' # str | The parameters supplied to the list operation.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.node_reports_list_by_node(resource_group_name, automation_account_name, node_id, subscription_id, api_version, filter=filter)
        print("The response of NodeReportsApi->node_reports_list_by_node:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeReportsApi->node_reports_list_by_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **node_id** | **str**| The parameters supplied to the list operation. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**DscNodeReportListResult**](DscNodeReportListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

