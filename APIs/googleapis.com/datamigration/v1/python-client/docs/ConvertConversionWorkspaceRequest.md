# ConvertConversionWorkspaceRequest

Request message for 'ConvertConversionWorkspace' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_commit** | **bool** | Optional. Specifies whether the conversion workspace is to be committed automatically after the conversion. | [optional] 
**convert_full_path** | **bool** | Optional. Automatically convert the full entity path for each entity specified by the filter. For example, if the filter specifies a table, that table schema (and database if there is one) will also be converted. | [optional] 
**filter** | **str** | Optional. Filter the entities to convert. Leaving this field empty will convert all of the entities. Supports Google AIP-160 style filtering. | [optional] 

## Example

```python
from openapi_client.models.convert_conversion_workspace_request import ConvertConversionWorkspaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertConversionWorkspaceRequest from a JSON string
convert_conversion_workspace_request_instance = ConvertConversionWorkspaceRequest.from_json(json)
# print the JSON string representation of the object
print(ConvertConversionWorkspaceRequest.to_json())

# convert the object into a dict
convert_conversion_workspace_request_dict = convert_conversion_workspace_request_instance.to_dict()
# create an instance of ConvertConversionWorkspaceRequest from a dict
convert_conversion_workspace_request_from_dict = ConvertConversionWorkspaceRequest.from_dict(convert_conversion_workspace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


