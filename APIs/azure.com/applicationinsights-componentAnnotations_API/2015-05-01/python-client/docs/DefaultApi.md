# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotations_create**](DefaultApi.md#annotations_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations | 
[**annotations_delete**](DefaultApi.md#annotations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations/{annotationId} | 
[**annotations_get**](DefaultApi.md#annotations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations/{annotationId} | 
[**annotations_list**](DefaultApi.md#annotations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations | 


# **annotations_create**
> List[Annotation] annotations_create(resource_group_name, api_version, subscription_id, resource_name, annotation_properties)



Create an Annotation of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.annotation import Annotation
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
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    annotation_properties = openapi_client.Annotation() # Annotation | Properties that need to be specified to create an annotation of a Application Insights component.

    try:
        api_response = api_instance.annotations_create(resource_group_name, api_version, subscription_id, resource_name, annotation_properties)
        print("The response of DefaultApi->annotations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->annotations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **annotation_properties** | [**Annotation**](Annotation.md)| Properties that need to be specified to create an annotation of a Application Insights component. | 

### Return type

[**List[Annotation]**](Annotation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object containing the annotation definition created by this PUT call. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **annotations_delete**
> annotations_delete(resource_group_name, api_version, subscription_id, resource_name, annotation_id)



Delete an Annotation of an Application Insights component.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    annotation_id = 'annotation_id_example' # str | The unique annotation ID. This is unique within a Application Insights component.

    try:
        api_instance.annotations_delete(resource_group_name, api_version, subscription_id, resource_name, annotation_id)
    except Exception as e:
        print("Exception when calling DefaultApi->annotations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **annotation_id** | **str**| The unique annotation ID. This is unique within a Application Insights component. | 

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
**200** | The annotation that was successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **annotations_get**
> List[Annotation] annotations_get(resource_group_name, api_version, subscription_id, resource_name, annotation_id)



Get the annotation for given id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.annotation import Annotation
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
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    annotation_id = 'annotation_id_example' # str | The unique annotation ID. This is unique within a Application Insights component.

    try:
        api_response = api_instance.annotations_get(resource_group_name, api_version, subscription_id, resource_name, annotation_id)
        print("The response of DefaultApi->annotations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->annotations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **annotation_id** | **str**| The unique annotation ID. This is unique within a Application Insights component. | 

### Return type

[**List[Annotation]**](Annotation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Annotation object for this id. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **annotations_list**
> AnnotationsListResult annotations_list(resource_group_name, api_version, subscription_id, resource_name, start, end)



Gets the list of annotations for a component for given time range

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.annotations_list_result import AnnotationsListResult
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
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    start = 'start_example' # str | The start time to query from for annotations, cannot be older than 90 days from current date.
    end = 'end_example' # str | The end time to query for annotations.

    try:
        api_response = api_instance.annotations_list(resource_group_name, api_version, subscription_id, resource_name, start, end)
        print("The response of DefaultApi->annotations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->annotations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **start** | **str**| The start time to query from for annotations, cannot be older than 90 days from current date. | 
 **end** | **str**| The end time to query for annotations. | 

### Return type

[**AnnotationsListResult**](AnnotationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

