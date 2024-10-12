# openapi_client.ApplicationSecurityGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_security_groups_update_tags**](ApplicationSecurityGroupsApi.md#application_security_groups_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName} | 


# **application_security_groups_update_tags**
> ApplicationSecurityGroup application_security_groups_update_tags(resource_group_name, application_security_group_name, api_version, subscription_id, parameters)



Updates an application security group's tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_security_group import ApplicationSecurityGroup
from openapi_client.models.application_security_groups_update_tags_request import ApplicationSecurityGroupsUpdateTagsRequest
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
    api_instance = openapi_client.ApplicationSecurityGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_security_group_name = 'application_security_group_name_example' # str | The name of the application security group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApplicationSecurityGroupsUpdateTagsRequest() # ApplicationSecurityGroupsUpdateTagsRequest | Parameters supplied to update application security group tags.

    try:
        api_response = api_instance.application_security_groups_update_tags(resource_group_name, application_security_group_name, api_version, subscription_id, parameters)
        print("The response of ApplicationSecurityGroupsApi->application_security_groups_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationSecurityGroupsApi->application_security_groups_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_security_group_name** | **str**| The name of the application security group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApplicationSecurityGroupsUpdateTagsRequest**](ApplicationSecurityGroupsUpdateTagsRequest.md)| Parameters supplied to update application security group tags. | 

### Return type

[**ApplicationSecurityGroup**](ApplicationSecurityGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ApplicationSecurityGroup resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

