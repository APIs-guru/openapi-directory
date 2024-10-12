# FarmCreationProperties

Storage farm properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SettingAccessString**](SettingAccessString.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource Name. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.farm_creation_properties import FarmCreationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FarmCreationProperties from a JSON string
farm_creation_properties_instance = FarmCreationProperties.from_json(json)
# print the JSON string representation of the object
print(FarmCreationProperties.to_json())

# convert the object into a dict
farm_creation_properties_dict = farm_creation_properties_instance.to_dict()
# create an instance of FarmCreationProperties from a dict
farm_creation_properties_from_dict = FarmCreationProperties.from_dict(farm_creation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


