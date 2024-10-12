# openapi_client.DestinationDefinitionSpecificationApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_destination_definition_specification**](DestinationDefinitionSpecificationApi.md#get_destination_definition_specification) | **POST** /v1/destination_definition_specifications/get | Get specification for a destinationDefinition


# **get_destination_definition_specification**
> DestinationDefinitionSpecificationRead get_destination_definition_specification(destination_definition_id_with_workspace_id)

Get specification for a destinationDefinition

### Example


```python
import openapi_client
from openapi_client.models.destination_definition_id_with_workspace_id import DestinationDefinitionIdWithWorkspaceId
from openapi_client.models.destination_definition_specification_read import DestinationDefinitionSpecificationRead
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
    api_instance = openapi_client.DestinationDefinitionSpecificationApi(api_client)
    destination_definition_id_with_workspace_id = openapi_client.DestinationDefinitionIdWithWorkspaceId() # DestinationDefinitionIdWithWorkspaceId | 

    try:
        # Get specification for a destinationDefinition
        api_response = api_instance.get_destination_definition_specification(destination_definition_id_with_workspace_id)
        print("The response of DestinationDefinitionSpecificationApi->get_destination_definition_specification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationDefinitionSpecificationApi->get_destination_definition_specification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_definition_id_with_workspace_id** | [**DestinationDefinitionIdWithWorkspaceId**](DestinationDefinitionIdWithWorkspaceId.md)|  | 

### Return type

[**DestinationDefinitionSpecificationRead**](DestinationDefinitionSpecificationRead.md)

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

