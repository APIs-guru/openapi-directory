# JSONEntity

Exported Model - Extracted Entity from utterance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_pos** | **int** | The index within the utterance where the extracted entity ends. | 
**entity** | **str** | The entity name. | 
**start_pos** | **int** | The index within the utterance where the extracted entity starts. | 

## Example

```python
from openapi_client.models.json_entity import JSONEntity

# TODO update the JSON string below
json = "{}"
# create an instance of JSONEntity from a JSON string
json_entity_instance = JSONEntity.from_json(json)
# print the JSON string representation of the object
print(JSONEntity.to_json())

# convert the object into a dict
json_entity_dict = json_entity_instance.to_dict()
# create an instance of JSONEntity from a dict
json_entity_from_dict = JSONEntity.from_dict(json_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


