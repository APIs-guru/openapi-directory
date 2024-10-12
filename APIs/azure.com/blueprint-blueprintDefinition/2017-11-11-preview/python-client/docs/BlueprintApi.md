# openapi_client.BlueprintApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blueprints_create_or_update**](BlueprintApi.md#blueprints_create_or_update) | **PUT** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName} | 
[**blueprints_delete**](BlueprintApi.md#blueprints_delete) | **DELETE** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName} | 
[**blueprints_get**](BlueprintApi.md#blueprints_get) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName} | 
[**blueprints_list**](BlueprintApi.md#blueprints_list) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints | 


# **blueprints_create_or_update**
> Blueprint blueprints_create_or_update(api_version, management_group_name, blueprint_name, blueprint)



Create or update Blueprint definition.

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
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.
    blueprint = openapi_client.Blueprint() # Blueprint | Blueprint definition.

    try:
        api_response = api_instance.blueprints_create_or_update(api_version, management_group_name, blueprint_name, blueprint)
        print("The response of BlueprintApi->blueprints_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 
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
**201** | Created -- Blueprint definition saved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blueprints_delete**
> Blueprint blueprints_delete(api_version, management_group_name, blueprint_name)



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
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.

    try:
        api_response = api_instance.blueprints_delete(api_version, management_group_name, blueprint_name)
        print("The response of BlueprintApi->blueprints_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 

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
**200** | OK -- blueprint definition deleted |  -  |
**204** | no content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blueprints_get**
> Blueprint blueprints_get(api_version, management_group_name, blueprint_name)



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
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.

    try:
        api_response = api_instance.blueprints_get(api_version, management_group_name, blueprint_name)
        print("The response of BlueprintApi->blueprints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 

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
> BlueprintList blueprints_list(api_version, management_group_name)



List Blueprint definitions within a Management Group.

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
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.

    try:
        api_response = api_instance.blueprints_list(api_version, management_group_name)
        print("The response of BlueprintApi->blueprints_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlueprintApi->blueprints_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 

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
**200** | OK -- retrieved Blueprints in this ManagementGroup. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

