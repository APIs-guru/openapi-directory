# openapi_client.PipelineTemplatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pipeline_templates_list**](PipelineTemplatesApi.md#pipeline_templates_list) | **GET** /providers/microsoft.visualstudio/pipelineTemplates | PipelineTemplates_List


# **pipeline_templates_list**
> PipelineTemplateResourceListResult pipeline_templates_list(api_version)

PipelineTemplates_List

Gets all pipeline templates which can be used to configure a CI/CD pipeline in a new or an existing Team Services project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_template_resource_list_result import PipelineTemplateResourceListResult
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
    api_instance = openapi_client.PipelineTemplatesApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # PipelineTemplates_List
        api_response = api_instance.pipeline_templates_list(api_version)
        print("The response of PipelineTemplatesApi->pipeline_templates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelineTemplatesApi->pipeline_templates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**PipelineTemplateResourceListResult**](PipelineTemplateResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response is a list of all pipeline templates which can be used to configure a CI/CD pipeline in a new or an existing Team Services project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

