# openapi_client.SourceDefinitionSpecificationApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_source_definition_specification**](SourceDefinitionSpecificationApi.md#get_source_definition_specification) | **POST** /v1/source_definition_specifications/get | Get specification for a SourceDefinition.


# **get_source_definition_specification**
> SourceDefinitionSpecificationRead get_source_definition_specification(source_definition_id_with_workspace_id)

Get specification for a SourceDefinition.

### Example


```python
import openapi_client
from openapi_client.models.source_definition_id_with_workspace_id import SourceDefinitionIdWithWorkspaceId
from openapi_client.models.source_definition_specification_read import SourceDefinitionSpecificationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourceDefinitionSpecificationApi(api_client)
    source_definition_id_with_workspace_id = openapi_client.SourceDefinitionIdWithWorkspaceId() # SourceDefinitionIdWithWorkspaceId | 

    try:
        # Get specification for a SourceDefinition.
        api_response = api_instance.get_source_definition_specification(source_definition_id_with_workspace_id)
        print("The response of SourceDefinitionSpecificationApi->get_source_definition_specification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionSpecificationApi->get_source_definition_specification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_id_with_workspace_id** | [**SourceDefinitionIdWithWorkspaceId**](SourceDefinitionIdWithWorkspaceId.md)|  | 

### Return type

[**SourceDefinitionSpecificationRead**](SourceDefinitionSpecificationRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

