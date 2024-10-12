# MetadataDefinitionBase

The Metadata definition base.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, List[str]]** | The attributes for the Type. | [optional] 
**description** | **Dict[str, str]** | Localized descriptions for the property. | [optional] 
**display_name** | **Dict[str, str]** | Localized display names for the property. | [optional] 
**large_image** | **str** | Large Image associated with the Property or EntityType. | [optional] 
**localized_attributes** | **Dict[str, Dict[str, str]]** | Any custom localized attributes for the Type. | [optional] 
**medium_image** | **str** | Medium Image associated with the Property or EntityType. | [optional] 
**small_image** | **str** | Small Image associated with the Property or EntityType. | [optional] 

## Example

```python
from openapi_client.models.metadata_definition_base import MetadataDefinitionBase

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataDefinitionBase from a JSON string
metadata_definition_base_instance = MetadataDefinitionBase.from_json(json)
# print the JSON string representation of the object
print(MetadataDefinitionBase.to_json())

# convert the object into a dict
metadata_definition_base_dict = metadata_definition_base_instance.to_dict()
# create an instance of MetadataDefinitionBase from a dict
metadata_definition_base_from_dict = MetadataDefinitionBase.from_dict(metadata_definition_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


