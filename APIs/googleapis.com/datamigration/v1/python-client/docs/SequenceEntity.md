# SequenceEntity

Sequence's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache** | **str** | Indicates number of entries to cache / precreate. | [optional] 
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**cycle** | **bool** | Indicates whether the sequence value should cycle through. | [optional] 
**increment** | **str** | Increment value for the sequence. | [optional] 
**max_value** | **bytearray** | Maximum number for the sequence represented as bytes to accommodate large. numbers | [optional] 
**min_value** | **bytearray** | Minimum number for the sequence represented as bytes to accommodate large. numbers | [optional] 
**start_value** | **bytearray** | Start number for the sequence represented as bytes to accommodate large. numbers | [optional] 

## Example

```python
from openapi_client.models.sequence_entity import SequenceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of SequenceEntity from a JSON string
sequence_entity_instance = SequenceEntity.from_json(json)
# print the JSON string representation of the object
print(SequenceEntity.to_json())

# convert the object into a dict
sequence_entity_dict = sequence_entity_instance.to_dict()
# create an instance of SequenceEntity from a dict
sequence_entity_from_dict = SequenceEntity.from_dict(sequence_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


