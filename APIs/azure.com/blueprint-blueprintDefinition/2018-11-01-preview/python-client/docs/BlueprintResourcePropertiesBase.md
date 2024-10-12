# BlueprintResourcePropertiesBase

Shared properties between all blueprint resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 

## Example

```python
from openapi_client.models.blueprint_resource_properties_base import BlueprintResourcePropertiesBase

# TODO update the JSON string below
json = "{}"
# create an instance of BlueprintResourcePropertiesBase from a JSON string
blueprint_resource_properties_base_instance = BlueprintResourcePropertiesBase.from_json(json)
# print the JSON string representation of the object
print(BlueprintResourcePropertiesBase.to_json())

# convert the object into a dict
blueprint_resource_properties_base_dict = blueprint_resource_properties_base_instance.to_dict()
# create an instance of BlueprintResourcePropertiesBase from a dict
blueprint_resource_properties_base_from_dict = BlueprintResourcePropertiesBase.from_dict(blueprint_resource_properties_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


