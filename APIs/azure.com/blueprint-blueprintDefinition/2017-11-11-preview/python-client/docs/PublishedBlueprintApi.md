# openapi_client.PublishedBlueprintApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**published_blueprints_create**](PublishedBlueprintApi.md#published_blueprints_create) | **PUT** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId} | 
[**published_blueprints_delete**](PublishedBlueprintApi.md#published_blueprints_delete) | **DELETE** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId} | 
[**published_blueprints_get**](PublishedBlueprintApi.md#published_blueprints_get) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId} | 
[**published_blueprints_list**](PublishedBlueprintApi.md#published_blueprints_list) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions | 


# **published_blueprints_create**
> PublishedBlueprint published_blueprints_create(api_version, management_group_name, blueprint_name, version_id)



Publish a new version of the Blueprint with the latest artifacts. Published Blueprints are immutable.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.published_blueprint import PublishedBlueprint
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
    api_instance = openapi_client.PublishedBlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.
    version_id = 'version_id_example' # str | version of the published blueprint.

    try:
        api_response = api_instance.published_blueprints_create(api_version, management_group_name, blueprint_name, version_id)
        print("The response of PublishedBlueprintApi->published_blueprints_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishedBlueprintApi->published_blueprints_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 
 **version_id** | **str**| version of the published blueprint. | 

### Return type

[**PublishedBlueprint**](PublishedBlueprint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created -- published Blueprint. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **published_blueprints_delete**
> PublishedBlueprint published_blueprints_delete(api_version, management_group_name, blueprint_name, version_id)



Delete a published Blueprint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.published_blueprint import PublishedBlueprint
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
    api_instance = openapi_client.PublishedBlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.
    version_id = 'version_id_example' # str | version of the published blueprint.

    try:
        api_response = api_instance.published_blueprints_delete(api_version, management_group_name, blueprint_name, version_id)
        print("The response of PublishedBlueprintApi->published_blueprints_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishedBlueprintApi->published_blueprints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 
 **version_id** | **str**| version of the published blueprint. | 

### Return type

[**PublishedBlueprint**](PublishedBlueprint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- published Blueprint deleted. |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **published_blueprints_get**
> PublishedBlueprint published_blueprints_get(api_version, management_group_name, blueprint_name, version_id)



Get a published Blueprint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.published_blueprint import PublishedBlueprint
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
    api_instance = openapi_client.PublishedBlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.
    version_id = 'version_id_example' # str | version of the published blueprint.

    try:
        api_response = api_instance.published_blueprints_get(api_version, management_group_name, blueprint_name, version_id)
        print("The response of PublishedBlueprintApi->published_blueprints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishedBlueprintApi->published_blueprints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 
 **version_id** | **str**| version of the published blueprint. | 

### Return type

[**PublishedBlueprint**](PublishedBlueprint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- published Blueprint retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **published_blueprints_list**
> PublishedBlueprintList published_blueprints_list(api_version, management_group_name, blueprint_name)



List published versions of given Blueprint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.published_blueprint_list import PublishedBlueprintList
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
    api_instance = openapi_client.PublishedBlueprintApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    management_group_name = 'management_group_name_example' # str | ManagementGroup where blueprint stores.
    blueprint_name = 'blueprint_name_example' # str | name of the blueprint.

    try:
        api_response = api_instance.published_blueprints_list(api_version, management_group_name, blueprint_name)
        print("The response of PublishedBlueprintApi->published_blueprints_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishedBlueprintApi->published_blueprints_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **management_group_name** | **str**| ManagementGroup where blueprint stores. | 
 **blueprint_name** | **str**| name of the blueprint. | 

### Return type

[**PublishedBlueprintList**](PublishedBlueprintList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- all published Blueprint retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

