# openapi_client.ResourceGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_groups_check_existence**](ResourceGroupsApi.md#resource_groups_check_existence) | **HEAD** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_create_or_update**](ResourceGroupsApi.md#resource_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_delete**](ResourceGroupsApi.md#resource_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | Deletes a resource group.
[**resource_groups_export_template**](ResourceGroupsApi.md#resource_groups_export_template) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/exportTemplate | 
[**resource_groups_get**](ResourceGroupsApi.md#resource_groups_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | 
[**resource_groups_list**](ResourceGroupsApi.md#resource_groups_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups | 
[**resource_groups_update**](ResourceGroupsApi.md#resource_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName} | Updates a resource group.
[**resources_list_by_resource_group**](ResourceGroupsApi.md#resources_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/resources | 


# **resource_groups_check_existence**
> resource_groups_check_existence(resource_group_name, api_version, subscription_id)



Checks whether a resource group exists.

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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to check. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.resource_groups_check_existence(resource_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_check_existence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to check. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | No Content |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_create_or_update**
> ResourceGroup resource_groups_create_or_update(resource_group_name, api_version, subscription_id, parameters)



Creates or updates a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group import ResourceGroup
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to create or update. Can include alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that match the allowed characters.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ResourceGroup() # ResourceGroup | Parameters supplied to the create or update a resource group.

    try:
        api_response = api_instance.resource_groups_create_or_update(resource_group_name, api_version, subscription_id, parameters)
        print("The response of ResourceGroupsApi->resource_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to create or update. Can include alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that match the allowed characters. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ResourceGroup**](ResourceGroup.md)| Parameters supplied to the create or update a resource group. | 

### Return type

[**ResourceGroup**](ResourceGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the new resource group. |  -  |
**201** | Created - Returns information about the new resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_delete**
> resource_groups_delete(resource_group_name, api_version, subscription_id)

Deletes a resource group.

When you delete a resource group, all of its resources are also deleted. Deleting a resource group deletes all of its template deployments and currently stored operations.

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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to delete. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes a resource group.
        api_instance.resource_groups_delete(resource_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to delete. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_export_template**
> ResourceGroupExportResult resource_groups_export_template(resource_group_name, api_version, subscription_id, parameters)



Captures the specified resource group as a template.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.export_template_request import ExportTemplateRequest
from openapi_client.models.resource_group_export_result import ResourceGroupExportResult
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to export as a template.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ExportTemplateRequest() # ExportTemplateRequest | Parameters for exporting the template.

    try:
        api_response = api_instance.resource_groups_export_template(resource_group_name, api_version, subscription_id, parameters)
        print("The response of ResourceGroupsApi->resource_groups_export_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_export_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to export as a template. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ExportTemplateRequest**](ExportTemplateRequest.md)| Parameters for exporting the template. | 

### Return type

[**ResourceGroupExportResult**](ResourceGroupExportResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the result of the export. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_get**
> ResourceGroup resource_groups_get(resource_group_name, api_version, subscription_id)



Gets a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group import ResourceGroup
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.resource_groups_get(resource_group_name, api_version, subscription_id)
        print("The response of ResourceGroupsApi->resource_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**ResourceGroup**](ResourceGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_list**
> ResourceGroupListResult resource_groups_list(api_version, subscription_id, filter=filter, top=top)



Gets all the resource groups for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group_list_result import ResourceGroupListResult
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1' (optional)
    top = 56 # int | The number of results to return. If null is passed, returns all resource groups. (optional)

    try:
        api_response = api_instance.resource_groups_list(api_version, subscription_id, filter=filter, top=top)
        print("The response of ResourceGroupsApi->resource_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation.&lt;br&gt;&lt;br&gt;You can filter by tag names and values. For example, to filter for a tag name and value, use $filter&#x3D;tagName eq &#39;tag1&#39; and tagValue eq &#39;Value1&#39; | [optional] 
 **top** | **int**| The number of results to return. If null is passed, returns all resource groups. | [optional] 

### Return type

[**ResourceGroupListResult**](ResourceGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resource groups. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_groups_update**
> ResourceGroup resource_groups_update(resource_group_name, api_version, subscription_id, parameters)

Updates a resource group.

Resource groups can be updated through a simple PATCH operation to a group address. The format of the request is the same as that for creating a resource group. If a field is unspecified, the current value is retained.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_group import ResourceGroup
from openapi_client.models.resource_group_patchable import ResourceGroupPatchable
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to update. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ResourceGroupPatchable() # ResourceGroupPatchable | Parameters supplied to update a resource group.

    try:
        # Updates a resource group.
        api_response = api_instance.resource_groups_update(resource_group_name, api_version, subscription_id, parameters)
        print("The response of ResourceGroupsApi->resource_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resource_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to update. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ResourceGroupPatchable**](ResourceGroupPatchable.md)| Parameters supplied to update a resource group. | 

### Return type

[**ResourceGroup**](ResourceGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_list_by_resource_group**
> ResourceListResult resources_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, expand=expand, top=top)



Get all the resources for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_list_result import ResourceListResult
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
    api_instance = openapi_client.ResourceGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group with the resources to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. (optional)
    expand = 'expand_example' # str | The $expand query parameter. You can expand createdTime and changedTime. For example, to expand both properties, use $expand=changedTime,createdTime (optional)
    top = 56 # int | The number of results to return. If null is passed, returns all resources. (optional)

    try:
        api_response = api_instance.resources_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, expand=expand, top=top)
        print("The response of ResourceGroupsApi->resources_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceGroupsApi->resources_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group with the resources to get. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation.&lt;br&gt;&lt;br&gt;The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.&lt;br&gt;&lt;br&gt;For example, to filter by a resource type, use: $filter&#x3D;resourceType eq &#39;Microsoft.Network/virtualNetworks&#39;&lt;br&gt;&lt;br&gt;You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.&lt;br&gt;&lt;br&gt;For example, to get all resources with &#39;demo&#39; anywhere in the name, use: $filter&#x3D;substringof(&#39;demo&#39;, name)&lt;br&gt;&lt;br&gt;You can link more than one substringof together by adding and/or operators.&lt;br&gt;&lt;br&gt;You can filter by tag names and values. For example, to filter for a tag name and value, use $filter&#x3D;tagName eq &#39;tag1&#39; and tagValue eq &#39;Value1&#39;&lt;br&gt;&lt;br&gt;You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. | [optional] 
 **expand** | **str**| The $expand query parameter. You can expand createdTime and changedTime. For example, to expand both properties, use $expand&#x3D;changedTime,createdTime | [optional] 
 **top** | **int**| The number of results to return. If null is passed, returns all resources. | [optional] 

### Return type

[**ResourceListResult**](ResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resources |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

