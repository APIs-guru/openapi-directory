# ListConversionWorkspacesResponse

Response message for 'ListConversionWorkspaces' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_workspaces** | [**List[ConversionWorkspace]**](ConversionWorkspace.md) | The list of conversion workspace objects. | [optional] 
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_conversion_workspaces_response import ListConversionWorkspacesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConversionWorkspacesResponse from a JSON string
list_conversion_workspaces_response_instance = ListConversionWorkspacesResponse.from_json(json)
# print the JSON string representation of the object
print(ListConversionWorkspacesResponse.to_json())

# convert the object into a dict
list_conversion_workspaces_response_dict = list_conversion_workspaces_response_instance.to_dict()
# create an instance of ListConversionWorkspacesResponse from a dict
list_conversion_workspaces_response_from_dict = ListConversionWorkspacesResponse.from_dict(list_conversion_workspaces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


