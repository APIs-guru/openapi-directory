# MetadataEntityProperties

The metadata entity properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_scenarios** | **List[str]** | The list of scenarios applicable to this metadata entity. | [optional] 
**depends_on** | **List[str]** | The list of keys on which this entity depends on. | [optional] 
**display_name** | **str** | The display name. | [optional] 
**supported_values** | [**List[MetadataSupportedValueDetail]**](MetadataSupportedValueDetail.md) | The list of supported values. | [optional] 

## Example

```python
from openapi_client.models.metadata_entity_properties import MetadataEntityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataEntityProperties from a JSON string
metadata_entity_properties_instance = MetadataEntityProperties.from_json(json)
# print the JSON string representation of the object
print(MetadataEntityProperties.to_json())

# convert the object into a dict
metadata_entity_properties_dict = metadata_entity_properties_instance.to_dict()
# create an instance of MetadataEntityProperties from a dict
metadata_entity_properties_from_dict = MetadataEntityProperties.from_dict(metadata_entity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


