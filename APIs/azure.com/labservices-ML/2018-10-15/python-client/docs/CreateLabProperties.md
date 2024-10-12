# CreateLabProperties

Properties for creating a managed lab and a default environment setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_setting_creation_parameters** | [**EnvironmentSettingCreationParameters**](EnvironmentSettingCreationParameters.md) |  | [optional] 
**lab_creation_parameters** | [**LabCreationParameters**](LabCreationParameters.md) |  | 
**location** | **str** | The location of the resource | [optional] 
**name** | **str** | The name of the resource | 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.create_lab_properties import CreateLabProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLabProperties from a JSON string
create_lab_properties_instance = CreateLabProperties.from_json(json)
# print the JSON string representation of the object
print(CreateLabProperties.to_json())

# convert the object into a dict
create_lab_properties_dict = create_lab_properties_instance.to_dict()
# create an instance of CreateLabProperties from a dict
create_lab_properties_from_dict = CreateLabProperties.from_dict(create_lab_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


