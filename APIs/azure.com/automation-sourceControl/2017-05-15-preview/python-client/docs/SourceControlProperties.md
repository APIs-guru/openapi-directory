# SourceControlProperties

Definition of the source control properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_sync** | **bool** | The auto sync of the source control. Default is false. | [optional] 
**branch** | **str** | The repo branch of the source control. Include branch as empty string for VsoTfvc. | [optional] 
**creation_time** | **datetime** | The creation time. | [optional] 
**description** | **str** | The description. | [optional] 
**folder_path** | **str** | The folder path of the source control. | [optional] 
**last_modified_time** | **datetime** | The last modified time. | [optional] 
**publish_runbook** | **bool** | The auto publish of the source control. Default is true. | [optional] 
**repo_url** | **str** | The repo url of the source control. | [optional] 
**source_type** | **str** | The source type. Must be one of VsoGit, VsoTfvc, GitHub. | [optional] 

## Example

```python
from openapi_client.models.source_control_properties import SourceControlProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlProperties from a JSON string
source_control_properties_instance = SourceControlProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlProperties.to_json())

# convert the object into a dict
source_control_properties_dict = source_control_properties_instance.to_dict()
# create an instance of SourceControlProperties from a dict
source_control_properties_from_dict = SourceControlProperties.from_dict(source_control_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


