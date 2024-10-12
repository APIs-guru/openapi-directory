# openapi_client.GlobalResourceGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_resource_groups_move_resources**](GlobalResourceGroupsApi.md#global_resource_groups_move_resources) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources | 


# **global_resource_groups_move_resources**
> global_resource_groups_move_resources(resource_group_name, subscription_id, api_version, move_resource_envelope)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_move_resource_envelope import CsmMoveResourceEnvelope
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
    api_instance = openapi_client.GlobalResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    move_resource_envelope = openapi_client.CsmMoveResourceEnvelope() # CsmMoveResourceEnvelope | 

    try:
        api_instance.global_resource_groups_move_resources(resource_group_name, subscription_id, api_version, move_resource_envelope)
    except Exception as e:
        print("Exception when calling GlobalResourceGroupsApi->global_resource_groups_move_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **move_resource_envelope** | [**CsmMoveResourceEnvelope**](CsmMoveResourceEnvelope.md)|  | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

