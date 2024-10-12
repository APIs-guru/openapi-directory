# openapi_client.ArtifactTypeApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_artifact_types**](ArtifactTypeApi.md#list_artifact_types) | **GET** /admin/artifactTypes | List artifact types


# **list_artifact_types**
> List[ArtifactTypeInfo] list_artifact_types()

List artifact types

Gets a list of all the configured artifact types.  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.artifact_type_info import ArtifactTypeInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactTypeApi(api_client)

    try:
        # List artifact types
        api_response = api_instance.list_artifact_types()
        print("The response of ArtifactTypeApi->list_artifact_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactTypeApi->list_artifact_types: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ArtifactTypeInfo]**](ArtifactTypeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of available artifact types. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

