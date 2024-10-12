# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**web_tests_create_or_update**](DefaultApi.md#web_tests_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName} | 
[**web_tests_delete**](DefaultApi.md#web_tests_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName} | 
[**web_tests_get**](DefaultApi.md#web_tests_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName} | 
[**web_tests_list**](DefaultApi.md#web_tests_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Insights/webtests | 
[**web_tests_list_by_component**](DefaultApi.md#web_tests_list_by_component) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{componentName}/webtests | 
[**web_tests_list_by_resource_group**](DefaultApi.md#web_tests_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests | 
[**web_tests_update_tags**](DefaultApi.md#web_tests_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName} | 


# **web_tests_create_or_update**
> WebTest web_tests_create_or_update(resource_group_name, api_version, subscription_id, web_test_name, web_test_definition)



Creates or updates an Application Insights web test definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.web_test import WebTest
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    web_test_name = 'web_test_name_example' # str | The name of the Application Insights webtest resource.
    web_test_definition = openapi_client.WebTest() # WebTest | Properties that need to be specified to create or update an Application Insights web test definition.

    try:
        api_response = api_instance.web_tests_create_or_update(resource_group_name, api_version, subscription_id, web_test_name, web_test_definition)
        print("The response of DefaultApi->web_tests_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **web_test_name** | **str**| The name of the Application Insights webtest resource. | 
 **web_test_definition** | [**WebTest**](WebTest.md)| Properties that need to be specified to create or update an Application Insights web test definition. | 

### Return type

[**WebTest**](WebTest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Adding the Application Insights web test was successful. Web test properties are updated and returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_tests_delete**
> web_tests_delete(subscription_id, resource_group_name, web_test_name, api_version)



Deletes an Application Insights web test.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    web_test_name = 'web_test_name_example' # str | The name of the Application Insights webtest resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.web_tests_delete(subscription_id, resource_group_name, web_test_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **web_test_name** | **str**| The name of the Application Insights webtest resource. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to delete a web test definition. |  -  |
**204** | No content: the request was successful, but the response is empty (the request to delete failed because the specified web test does not exist). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_tests_get**
> WebTest web_tests_get(resource_group_name, api_version, subscription_id, web_test_name)



Get a specific Application Insights web test definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.web_test import WebTest
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    web_test_name = 'web_test_name_example' # str | The name of the Application Insights webtest resource.

    try:
        api_response = api_instance.web_tests_get(resource_group_name, api_version, subscription_id, web_test_name)
        print("The response of DefaultApi->web_tests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **web_test_name** | **str**| The name of the Application Insights webtest resource. | 

### Return type

[**WebTest**](WebTest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ann Application Insights web test definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_tests_list**
> WebTestListResult web_tests_list(api_version, subscription_id)



Get all Application Insights web test alerts definitions within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.web_test_list_result import WebTestListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.web_tests_list(api_version, subscription_id)
        print("The response of DefaultApi->web_tests_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**WebTestListResult**](WebTestListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of 0 or more Application Insights web test definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_tests_list_by_component**
> WebTestListResult web_tests_list_by_component(component_name, resource_group_name, api_version, subscription_id)



Get all Application Insights web tests defined for the specified component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.web_test_list_result import WebTestListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    component_name = 'component_name_example' # str | The name of the Application Insights component resource.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.web_tests_list_by_component(component_name, resource_group_name, api_version, subscription_id)
        print("The response of DefaultApi->web_tests_list_by_component:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_list_by_component: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **component_name** | **str**| The name of the Application Insights component resource. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**WebTestListResult**](WebTestListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more web test definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_tests_list_by_resource_group**
> WebTestListResult web_tests_list_by_resource_group(resource_group_name, api_version, subscription_id)



Get all Application Insights web tests defined within a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.web_test_list_result import WebTestListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.web_tests_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of DefaultApi->web_tests_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**WebTestListResult**](WebTestListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more web test definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_tests_update_tags**
> WebTest web_tests_update_tags(resource_group_name, api_version, subscription_id, web_test_name, web_test_tags)



Creates or updates an Application Insights web test definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tags_resource import TagsResource
from openapi_client.models.web_test import WebTest
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    web_test_name = 'web_test_name_example' # str | The name of the Application Insights webtest resource.
    web_test_tags = openapi_client.TagsResource() # TagsResource | Updated tag information to set into the web test instance.

    try:
        api_response = api_instance.web_tests_update_tags(resource_group_name, api_version, subscription_id, web_test_name, web_test_tags)
        print("The response of DefaultApi->web_tests_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_tests_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **web_test_name** | **str**| The name of the Application Insights webtest resource. | 
 **web_test_tags** | [**TagsResource**](TagsResource.md)| Updated tag information to set into the web test instance. | 

### Return type

[**WebTest**](WebTest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updating the Application Insights web test tags was successful. Web test tags are updated and returned with the rest of the WebTest object properties. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

