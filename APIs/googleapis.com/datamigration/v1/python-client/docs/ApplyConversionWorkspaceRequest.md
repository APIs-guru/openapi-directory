# ApplyConversionWorkspaceRequest

Request message for 'ApplyConversionWorkspace' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_commit** | **bool** | Optional. Specifies whether the conversion workspace is to be committed automatically after the apply. | [optional] 
**connection_profile** | **str** | Optional. Fully qualified (Uri) name of the destination connection profile. | [optional] 
**dry_run** | **bool** | Optional. Only validates the apply process, but doesn&#39;t change the destination database. Only works for PostgreSQL destination connection profile. | [optional] 
**filter** | **str** | Filter which entities to apply. Leaving this field empty will apply all of the entities. Supports Google AIP 160 based filtering. | [optional] 

## Example

```python
from openapi_client.models.apply_conversion_workspace_request import ApplyConversionWorkspaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyConversionWorkspaceRequest from a JSON string
apply_conversion_workspace_request_instance = ApplyConversionWorkspaceRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyConversionWorkspaceRequest.to_json())

# convert the object into a dict
apply_conversion_workspace_request_dict = apply_conversion_workspace_request_instance.to_dict()
# create an instance of ApplyConversionWorkspaceRequest from a dict
apply_conversion_workspace_request_from_dict = ApplyConversionWorkspaceRequest.from_dict(apply_conversion_workspace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


