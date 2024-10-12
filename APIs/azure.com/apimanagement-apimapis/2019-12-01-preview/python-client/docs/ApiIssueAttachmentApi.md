# openapi_client.ApiIssueAttachmentApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_issue_attachment_create_or_update**](ApiIssueAttachmentApi.md#api_issue_attachment_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId} | 
[**api_issue_attachment_delete**](ApiIssueAttachmentApi.md#api_issue_attachment_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId} | 
[**api_issue_attachment_get**](ApiIssueAttachmentApi.md#api_issue_attachment_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId} | 
[**api_issue_attachment_get_entity_tag**](ApiIssueAttachmentApi.md#api_issue_attachment_get_entity_tag) | **HEAD** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId} | 
[**api_issue_attachment_list_by_service**](ApiIssueAttachmentApi.md#api_issue_attachment_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments | 


# **api_issue_attachment_create_or_update**
> ApiIssueAttachmentGet200Response api_issue_attachment_create_or_update(resource_group_name, service_name, api_id, issue_id, attachment_id, api_version, subscription_id, parameters, if_match=if_match)



Creates a new Attachment for the Issue in an API or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_issue_attachment_get200_response import ApiIssueAttachmentGet200Response
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
    api_instance = openapi_client.ApiIssueAttachmentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    attachment_id = 'attachment_id_example' # str | Attachment identifier within an Issue. Must be unique in the current Issue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApiIssueAttachmentGet200Response() # ApiIssueAttachmentGet200Response | Create parameters.
    if_match = 'if_match_example' # str | ETag of the Entity. Not required when creating an entity, but required when updating an entity. (optional)

    try:
        api_response = api_instance.api_issue_attachment_create_or_update(resource_group_name, service_name, api_id, issue_id, attachment_id, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of ApiIssueAttachmentApi->api_issue_attachment_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiIssueAttachmentApi->api_issue_attachment_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **attachment_id** | **str**| Attachment identifier within an Issue. Must be unique in the current Issue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApiIssueAttachmentGet200Response**](ApiIssueAttachmentGet200Response.md)| Create parameters. | 
 **if_match** | **str**| ETag of the Entity. Not required when creating an entity, but required when updating an entity. | [optional] 

### Return type

[**ApiIssueAttachmentGet200Response**](ApiIssueAttachmentGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Api issue attachment successfully updated |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**201** | New api issue attachment successfully added |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_attachment_delete**
> api_issue_attachment_delete(resource_group_name, service_name, api_id, issue_id, attachment_id, if_match, api_version, subscription_id)



Deletes the specified comment from an Issue.

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
    api_instance = openapi_client.ApiIssueAttachmentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    attachment_id = 'attachment_id_example' # str | Attachment identifier within an Issue. Must be unique in the current Issue.
    if_match = 'if_match_example' # str | ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_issue_attachment_delete(resource_group_name, service_name, api_id, issue_id, attachment_id, if_match, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiIssueAttachmentApi->api_issue_attachment_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **attachment_id** | **str**| Attachment identifier within an Issue. Must be unique in the current Issue. | 
 **if_match** | **str**| ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Attachment successfully removed |  -  |
**204** | Attachment successfully removed by previous request or does not exist |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_attachment_get**
> ApiIssueAttachmentGet200Response api_issue_attachment_get(resource_group_name, service_name, api_id, issue_id, attachment_id, api_version, subscription_id)



Gets the details of the issue Attachment for an API specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_issue_attachment_get200_response import ApiIssueAttachmentGet200Response
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
    api_instance = openapi_client.ApiIssueAttachmentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    attachment_id = 'attachment_id_example' # str | Attachment identifier within an Issue. Must be unique in the current Issue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_issue_attachment_get(resource_group_name, service_name, api_id, issue_id, attachment_id, api_version, subscription_id)
        print("The response of ApiIssueAttachmentApi->api_issue_attachment_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiIssueAttachmentApi->api_issue_attachment_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **attachment_id** | **str**| Attachment identifier within an Issue. Must be unique in the current Issue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApiIssueAttachmentGet200Response**](ApiIssueAttachmentGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified issue Attachment entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_attachment_get_entity_tag**
> api_issue_attachment_get_entity_tag(resource_group_name, service_name, api_id, issue_id, attachment_id, api_version, subscription_id)



Gets the entity state (Etag) version of the issue Attachment for an API specified by its identifier.

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
    api_instance = openapi_client.ApiIssueAttachmentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    attachment_id = 'attachment_id_example' # str | Attachment identifier within an Issue. Must be unique in the current Issue.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_issue_attachment_get_entity_tag(resource_group_name, service_name, api_id, issue_id, attachment_id, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiIssueAttachmentApi->api_issue_attachment_get_entity_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **attachment_id** | **str**| Attachment identifier within an Issue. Must be unique in the current Issue. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Operation completed successfully. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_attachment_list_by_service**
> ApiIssueAttachmentListByService200Response api_issue_attachment_list_by_service(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists all attachments for the Issue associated with the specified API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_issue_attachment_list_by_service200_response import ApiIssueAttachmentListByService200Response
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
    api_instance = openapi_client.ApiIssueAttachmentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br> (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.api_issue_attachment_list_by_service(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of ApiIssueAttachmentApi->api_issue_attachment_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiIssueAttachmentApi->api_issue_attachment_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| |   Field     |     Usage     |     Supported operators     |     Supported functions     |&lt;/br&gt;|-------------|-------------|-------------|-------------|&lt;/br&gt;| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt;| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | &lt;/br&gt; | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ApiIssueAttachmentListByService200Response**](ApiIssueAttachmentListByService200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paged Result response of issue attachments for the API. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

