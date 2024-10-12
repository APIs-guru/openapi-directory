# SourceControlUpdateProperties

The properties of the update source control

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_sync** | **bool** | The auto sync of the source control. Default is false. | [optional] 
**branch** | **str** | The repo branch of the source control. | [optional] 
**description** | **str** | The user description of the source control. | [optional] 
**folder_path** | **str** | The folder path of the source control. Path must be relative. | [optional] 
**publish_runbook** | **bool** | The auto publish of the source control. Default is true. | [optional] 
**security_token** | [**SourceControlSecurityTokenProperties**](SourceControlSecurityTokenProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_control_update_properties import SourceControlUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlUpdateProperties from a JSON string
source_control_update_properties_instance = SourceControlUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlUpdateProperties.to_json())

# convert the object into a dict
source_control_update_properties_dict = source_control_update_properties_instance.to_dict()
# create an instance of SourceControlUpdateProperties from a dict
source_control_update_properties_from_dict = SourceControlUpdateProperties.from_dict(source_control_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


