# ExternalEntity

Defines a user predicted entity that extends an already existing one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_length** | **int** | The length of the predicted entity. | 
**entity_name** | **str** | The name of the entity to extend. | 
**resolution** | **object** | A user supplied custom resolution to return as the entity&#39;s prediction. | [optional] 
**start_index** | **int** | The start character index of the predicted entity. | 

## Example

```python
from openapi_client.models.external_entity import ExternalEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalEntity from a JSON string
external_entity_instance = ExternalEntity.from_json(json)
# print the JSON string representation of the object
print(ExternalEntity.to_json())

# convert the object into a dict
external_entity_dict = external_entity_instance.to_dict()
# create an instance of ExternalEntity from a dict
external_entity_from_dict = ExternalEntity.from_dict(external_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


