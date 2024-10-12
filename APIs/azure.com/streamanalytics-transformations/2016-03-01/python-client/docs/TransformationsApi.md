# openapi_client.TransformationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transformations_create_or_replace**](TransformationsApi.md#transformations_create_or_replace) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName} | 
[**transformations_get**](TransformationsApi.md#transformations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName} | 
[**transformations_update**](TransformationsApi.md#transformations_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName} | 


# **transformations_create_or_replace**
> Transformation transformations_create_or_replace(api_version, subscription_id, resource_group_name, job_name, transformation_name, transformation, if_match=if_match, if_none_match=if_none_match)



Creates a transformation or replaces an already existing transformation under an existing streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transformation import Transformation
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
    api_instance = openapi_client.TransformationsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    transformation_name = 'transformation_name_example' # str | The name of the transformation.
    transformation = openapi_client.Transformation() # Transformation | The definition of the transformation that will be used to create a new transformation or replace the existing one under the streaming job.
    if_match = 'if_match_example' # str | The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new transformation to be created, but to prevent updating an existing transformation. Other values will result in a 412 Pre-condition Failed response. (optional)

    try:
        api_response = api_instance.transformations_create_or_replace(api_version, subscription_id, resource_group_name, job_name, transformation_name, transformation, if_match=if_match, if_none_match=if_none_match)
        print("The response of TransformationsApi->transformations_create_or_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformationsApi->transformations_create_or_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **transformation_name** | **str**| The name of the transformation. | 
 **transformation** | [**Transformation**](Transformation.md)| The definition of the transformation that will be used to create a new transformation or replace the existing one under the streaming job. | 
 **if_match** | **str**| The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new transformation to be created, but to prevent updating an existing transformation. Other values will result in a 412 Pre-condition Failed response. | [optional] 

### Return type

[**Transformation**](Transformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transformation was successfully created or replaced. |  * ETag - The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |
**201** | The transformation was successfully created or replaced. |  * ETag - The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transformations_get**
> Transformation transformations_get(api_version, subscription_id, resource_group_name, job_name, transformation_name)



Gets details about the specified transformation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transformation import Transformation
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
    api_instance = openapi_client.TransformationsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    transformation_name = 'transformation_name_example' # str | The name of the transformation.

    try:
        api_response = api_instance.transformations_get(api_version, subscription_id, resource_group_name, job_name, transformation_name)
        print("The response of TransformationsApi->transformations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformationsApi->transformations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **transformation_name** | **str**| The name of the transformation. | 

### Return type

[**Transformation**](Transformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified transformation. |  * ETag - The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transformations_update**
> Transformation transformations_update(api_version, subscription_id, resource_group_name, job_name, transformation_name, transformation, if_match=if_match)



Updates an existing transformation under an existing streaming job. This can be used to partially update (ie. update one or two properties) a transformation without affecting the rest the job or transformation definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transformation import Transformation
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
    api_instance = openapi_client.TransformationsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    transformation_name = 'transformation_name_example' # str | The name of the transformation.
    transformation = openapi_client.Transformation() # Transformation | A Transformation object. The properties specified here will overwrite the corresponding properties in the existing transformation (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing transformation will remain the same and not change as a result of this PATCH operation.
    if_match = 'if_match_example' # str | The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)

    try:
        api_response = api_instance.transformations_update(api_version, subscription_id, resource_group_name, job_name, transformation_name, transformation, if_match=if_match)
        print("The response of TransformationsApi->transformations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformationsApi->transformations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **transformation_name** | **str**| The name of the transformation. | 
 **transformation** | [**Transformation**](Transformation.md)| A Transformation object. The properties specified here will overwrite the corresponding properties in the existing transformation (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing transformation will remain the same and not change as a result of this PATCH operation. | 
 **if_match** | **str**| The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 

### Return type

[**Transformation**](Transformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transformation was successfully updated. |  * ETag - The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

