# openapi_client.ArtifactsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifacts_generate_arm_template**](ArtifactsApi.md#artifacts_generate_arm_template) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}/generateArmTemplate | 
[**artifacts_get**](ArtifactsApi.md#artifacts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name} | 
[**artifacts_list**](ArtifactsApi.md#artifacts_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts | 


# **artifacts_generate_arm_template**
> ArmTemplateInfo artifacts_generate_arm_template(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version, generate_arm_template_request)



Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.

### Example

* OAuth Authentication (azure_auth):

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    artifact_source_name = 'artifact_source_name_example' # str | The name of the artifact source.
    name = 'name_example' # str | The name of the artifact.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    generate_arm_template_request = openapi_client.GenerateArmTemplateRequest() # GenerateArmTemplateRequest | Parameters for generating an ARM template for deploying artifacts.

    try:
        api_response = api_instance.artifacts_generate_arm_template(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version, generate_arm_template_request)
        print("The response of ArtifactsApi->artifacts_generate_arm_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->artifacts_generate_arm_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **artifact_source_name** | **str**| The name of the artifact source. | 
 **name** | **str**| The name of the artifact. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **generate_arm_template_request** | [**GenerateArmTemplateRequest**](GenerateArmTemplateRequest.md)| Parameters for generating an ARM template for deploying artifacts. | 

### Return type

[**ArmTemplateInfo**](ArmTemplateInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_get**
> Artifact artifacts_get(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version, expand=expand)



Get artifact.

### Example

* OAuth Authentication (azure_auth):

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    artifact_source_name = 'artifact_source_name_example' # str | The name of the artifact source.
    name = 'name_example' # str | The name of the artifact.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=title)' (optional)

    try:
        api_response = api_instance.artifacts_get(subscription_id, resource_group_name, lab_name, artifact_source_name, name, api_version, expand=expand)
        print("The response of ArtifactsApi->artifacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->artifacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **artifact_source_name** | **str**| The name of the artifact source. | 
 **name** | **str**| The name of the artifact. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;title)&#39; | [optional] 

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_list**
> ArtifactList artifacts_list(subscription_id, resource_group_name, lab_name, artifact_source_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List artifacts in a given artifact source.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_list import ArtifactList
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    artifact_source_name = 'artifact_source_name_example' # str | The name of the artifact source.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=title)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. Example: '$filter=contains(name,'myName') (optional)
    top = 56 # int | The maximum number of resources to return from the operation. Example: '$top=10' (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. Example: '$orderby=name desc' (optional)

    try:
        api_response = api_instance.artifacts_list(subscription_id, resource_group_name, lab_name, artifact_source_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of ArtifactsApi->artifacts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->artifacts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **artifact_source_name** | **str**| The name of the artifact source. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;title)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. Example: &#39;$filter&#x3D;contains(name,&#39;myName&#39;) | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. Example: &#39;$top&#x3D;10&#39; | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. Example: &#39;$orderby&#x3D;name desc&#39; | [optional] 

### Return type

[**ArtifactList**](ArtifactList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

