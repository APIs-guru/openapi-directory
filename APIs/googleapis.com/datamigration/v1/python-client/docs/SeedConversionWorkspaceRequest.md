# SeedConversionWorkspaceRequest

Request message for 'SeedConversionWorkspace' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_commit** | **bool** | Should the conversion workspace be committed automatically after the seed operation. | [optional] 
**destination_connection_profile** | **str** | Optional. Fully qualified (Uri) name of the destination connection profile. | [optional] 
**source_connection_profile** | **str** | Optional. Fully qualified (Uri) name of the source connection profile. | [optional] 

## Example

```python
from openapi_client.models.seed_conversion_workspace_request import SeedConversionWorkspaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SeedConversionWorkspaceRequest from a JSON string
seed_conversion_workspace_request_instance = SeedConversionWorkspaceRequest.from_json(json)
# print the JSON string representation of the object
print(SeedConversionWorkspaceRequest.to_json())

# convert the object into a dict
seed_conversion_workspace_request_dict = seed_conversion_workspace_request_instance.to_dict()
# create an instance of SeedConversionWorkspaceRequest from a dict
seed_conversion_workspace_request_from_dict = SeedConversionWorkspaceRequest.from_dict(seed_conversion_workspace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


