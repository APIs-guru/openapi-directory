# openapi_client.BlueprintApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blueprints_create_or_update**](BlueprintApi.md#blueprints_create_or_update) | **PUT** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName} | 
[**blueprints_delete**](BlueprintApi.md#blueprints_delete) | **DELETE** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName} | 
[**blueprints_get**](BlueprintApi.md#blueprints_get) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName} | 
[**blueprints_list**](BlueprintApi.md#blueprints_list) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprints | 


# **blueprints_create_or_update**
> Blueprint blueprints_create_or_update(api_version, scope, blueprint_name, blueprint)



Create or update a blueprint definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blueprint import Blueprint
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
    api_instance = openapi_client.BlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.
    blueprint = openapi_client.Blueprint() # Blueprint | Blueprint definition.

    try:
        api_response = api_instance.blueprints_create_or_update(api_version, scope, blueprint_name, blueprint)
        print("The response of BlueprintApi->blueprints_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 
 **blueprint** | [**Blueprint**](Blueprint.md)| Blueprint definition. | 

### Return type

[**Blueprint**](Blueprint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created -- blueprint definition saved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blueprints_delete**
> Blueprint blueprints_delete(api_version, scope, blueprint_name)



Delete a blueprint definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blueprint import Blueprint
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
    api_instance = openapi_client.BlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.

    try:
        api_response = api_instance.blueprints_delete(api_version, scope, blueprint_name)
        print("The response of BlueprintApi->blueprints_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 

### Return type

[**Blueprint**](Blueprint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- blueprint definition deleted. |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blueprints_get**
> Blueprint blueprints_get(api_version, scope, blueprint_name)



Get a blueprint definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blueprint import Blueprint
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
    api_instance = openapi_client.BlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.

    try:
        api_response = api_instance.blueprints_get(api_version, scope, blueprint_name)
        print("The response of BlueprintApi->blueprints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 

### Return type

[**Blueprint**](Blueprint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- blueprint definition retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blueprints_list**
> BlueprintList blueprints_list(api_version, scope)



List blueprint definitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blueprint_list import BlueprintList
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
    api_instance = openapi_client.BlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.

    try:
        api_response = api_instance.blueprints_list(api_version, scope)
        print("The response of BlueprintApi->blueprints_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 

### Return type

[**BlueprintList**](BlueprintList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- retrieved list of blueprint definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

