# openapi_client.ArtifactApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifact_generate_arm_template**](ArtifactApi.md#artifact_generate_arm_template) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}/generateArmTemplate | 
[**artifact_get_resource**](ArtifactApi.md#artifact_get_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name} | 
[**artifact_list**](ArtifactApi.md#artifact_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts | 


# **artifact_generate_arm_template**
> ArmTemplateInfo artifact_generate_arm_template(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version, generate_arm_template_request)



Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.arm_template_info import ArmTemplateInfo
from openapi_client.models.generate_arm_template_request import GenerateArmTemplateRequest
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    artifact_source_name = 'artifact_source_name_example' # str | The name of the artifact source.
    name = 'name_example' # str | The name of the artifact.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    generate_arm_template_request = openapi_client.GenerateArmTemplateRequest() # GenerateArmTemplateRequest | 

    try:
        api_response = api_instance.artifact_generate_arm_template(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version, generate_arm_template_request)
        print("The response of ArtifactApi->artifact_generate_arm_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifact_generate_arm_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **artifact_source_name** | **str**| The name of the artifact source. | 
 **name** | **str**| The name of the artifact. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **generate_arm_template_request** | [**GenerateArmTemplateRequest**](GenerateArmTemplateRequest.md)|  | 

### Return type

[**ArmTemplateInfo**](ArmTemplateInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifact_get_resource**
> Artifact artifact_get_resource(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version)



Get artifact.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.artifact import Artifact
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    artifact_source_name = 'artifact_source_name_example' # str | The name of the artifact source.
    name = 'name_example' # str | The name of the artifact.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_response = api_instance.artifact_get_resource(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version)
        print("The response of ArtifactApi->artifact_get_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifact_get_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **artifact_source_name** | **str**| The name of the artifact source. | 
 **name** | **str**| The name of the artifact. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]

### Return type

[**Artifact**](Artifact.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifact_list**
> ResponseWithContinuationArtifact artifact_list(subscription_id, resource_group_name, lab_name, artifact_source_name, api_version, filter=filter, top=top, order_by=order_by)



List artifacts.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.response_with_continuation_artifact import ResponseWithContinuationArtifact
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    artifact_source_name = 'artifact_source_name_example' # str | The name of the artifact source.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    order_by = 'order_by_example' # str |  (optional)

    try:
        api_response = api_instance.artifact_list(subscription_id, resource_group_name, lab_name, artifact_source_name, api_version, filter=filter, top=top, order_by=order_by)
        print("The response of ArtifactApi->artifact_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifact_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **artifact_source_name** | **str**| The name of the artifact source. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **order_by** | **str**|  | [optional] 

### Return type

[**ResponseWithContinuationArtifact**](ResponseWithContinuationArtifact.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

