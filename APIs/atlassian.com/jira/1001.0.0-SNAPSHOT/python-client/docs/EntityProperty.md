# EntityProperty

An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the property. Required on create and update. | [optional] 
**value** | **object** | The value of the property. Required on create and update. | [optional] 

## Example

```python
from openapi_client.models.entity_property import EntityProperty

# TODO update the JSON string below
json = "{}"
# create an instance of EntityProperty from a JSON string
entity_property_instance = EntityProperty.from_json(json)
# print the JSON string representation of the object
print(EntityProperty.to_json())

# convert the object into a dict
entity_property_dict = entity_property_instance.to_dict()
# create an instance of EntityProperty from a dict
entity_property_from_dict = EntityProperty.from_dict(entity_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


