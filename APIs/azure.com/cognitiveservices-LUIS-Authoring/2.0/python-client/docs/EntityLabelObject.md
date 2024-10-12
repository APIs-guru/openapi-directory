# EntityLabelObject

Defines the entity type and position of the extracted entity within the example.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_char_index** | **int** | The index within the utterance where the extracted entity ends. | 
**entity_name** | **str** | The entity type. | 
**role** | **str** | The role of the entity within the utterance. | [optional] 
**start_char_index** | **int** | The index within the utterance where the extracted entity starts. | 

## Example

```python
from openapi_client.models.entity_label_object import EntityLabelObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityLabelObject from a JSON string
entity_label_object_instance = EntityLabelObject.from_json(json)
# print the JSON string representation of the object
print(EntityLabelObject.to_json())

# convert the object into a dict
entity_label_object_dict = entity_label_object_instance.to_dict()
# create an instance of EntityLabelObject from a dict
entity_label_object_from_dict = EntityLabelObject.from_dict(entity_label_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


