# SourceControlCreateOrUpdateProperties

The properties of the create source control operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_sync** | **bool** | The auto async of the source control. Default is false. | [optional] 
**branch** | **str** | The repo branch of the source control. Include branch as empty string for VsoTfvc. | [optional] 
**description** | **str** | The user description of the source control. | [optional] 
**folder_path** | **str** | The folder path of the source control. Path must be relative. | [optional] 
**publish_runbook** | **bool** | The auto publish of the source control. Default is true. | [optional] 
**repo_url** | **str** | The repo url of the source control. | [optional] 
**security_token** | [**SourceControlSecurityTokenProperties**](SourceControlSecurityTokenProperties.md) |  | [optional] 
**source_type** | **str** | The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive. | [optional] 

## Example

```python
from openapi_client.models.source_control_create_or_update_properties import SourceControlCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlCreateOrUpdateProperties from a JSON string
source_control_create_or_update_properties_instance = SourceControlCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlCreateOrUpdateProperties.to_json())

# convert the object into a dict
source_control_create_or_update_properties_dict = source_control_create_or_update_properties_instance.to_dict()
# create an instance of SourceControlCreateOrUpdateProperties from a dict
source_control_create_or_update_properties_from_dict = SourceControlCreateOrUpdateProperties.from_dict(source_control_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


