# LhrEntity

Message containing an Entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Optional. An optional category name for the entity. | [optional] 
**homepage** | **str** | Optional. An optional homepage URL of the entity. | [optional] 
**is_first_party** | **bool** | Optional. An optional flag indicating if the entity is the first party. | [optional] 
**is_unrecognized** | **bool** | Optional. An optional flag indicating if the entity is not recognized. | [optional] 
**name** | **str** | Required. Name of the entity. | [optional] 
**origins** | **List[str]** | Required. A list of URL origin strings that belong to this entity. | [optional] 

## Example

```python
from openapi_client.models.lhr_entity import LhrEntity

# TODO update the JSON string below
json = "{}"
# create an instance of LhrEntity from a JSON string
lhr_entity_instance = LhrEntity.from_json(json)
# print the JSON string representation of the object
print(LhrEntity.to_json())

# convert the object into a dict
lhr_entity_dict = lhr_entity_instance.to_dict()
# create an instance of LhrEntity from a dict
lhr_entity_from_dict = LhrEntity.from_dict(lhr_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


