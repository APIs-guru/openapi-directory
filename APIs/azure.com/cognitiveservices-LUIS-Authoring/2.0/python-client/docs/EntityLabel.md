# EntityLabel

Defines the entity type and position of the extracted entity within the example.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_token_index** | **int** | The index within the utterance where the extracted entity ends. | 
**entity_name** | **str** | The entity type. | 
**role** | **str** | The role of the entity within the utterance. | [optional] 
**role_id** | **str** | The role Id. | [optional] 
**start_token_index** | **int** | The index within the utterance where the extracted entity starts. | 

## Example

```python
from openapi_client.models.entity_label import EntityLabel

# TODO update the JSON string below
json = "{}"
# create an instance of EntityLabel from a JSON string
entity_label_instance = EntityLabel.from_json(json)
# print the JSON string representation of the object
print(EntityLabel.to_json())

# convert the object into a dict
entity_label_dict = entity_label_instance.to_dict()
# create an instance of EntityLabel from a dict
entity_label_from_dict = EntityLabel.from_dict(entity_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


