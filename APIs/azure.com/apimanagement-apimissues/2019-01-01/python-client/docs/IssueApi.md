# openapi_client.IssueApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issue_get**](IssueApi.md#issue_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/issues/{issueId} | 
[**issue_list_by_service**](IssueApi.md#issue_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/issues | 


# **issue_get**
> IssueGet200Response issue_get(resource_group_name, service_name, issue_id, api_version, subscription_id)



Gets API Management issue details

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.issue_get200_response import IssueGet200Response
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
    api_instance = openapi_client.IssueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.issue_get(resource_group_name, service_name, issue_id, api_version, subscription_id)
        print("The response of IssueApi->issue_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueApi->issue_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**IssueGet200Response**](IssueGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the details of the issue. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **issue_list_by_service**
> IssueListByService200Response issue_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists a collection of issues in the specified service instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.issue_list_by_service200_response import IssueListByService200Response
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
    api_instance = openapi_client.IssueApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| apiId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| title | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| authorName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br> (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.issue_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of IssueApi->issue_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueApi->issue_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| |   Field     |     Usage     |     Supported operators     |     Supported functions     |&lt;/br&gt;|-------------|-------------|-------------|-------------|&lt;/br&gt;| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt;| apiId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt;| title | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt;| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt;| authorName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt;| state | filter | eq |     | &lt;/br&gt; | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**IssueListByService200Response**](IssueListByService200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of Issue entities. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

