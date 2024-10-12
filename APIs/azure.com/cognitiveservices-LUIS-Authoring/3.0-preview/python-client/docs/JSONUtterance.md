# JSONUtterance

Exported Model - Utterance that was used to train the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[JSONEntity]**](JSONEntity.md) | The matched entities. | [optional] 
**intent** | **str** | The matched intent. | [optional] 
**text** | **str** | The utterance. | [optional] 

## Example

```python
from openapi_client.models.json_utterance import JSONUtterance

# TODO update the JSON string below
json = "{}"
# create an instance of JSONUtterance from a JSON string
json_utterance_instance = JSONUtterance.from_json(json)
# print the JSON string representation of the object
print(JSONUtterance.to_json())

# convert the object into a dict
json_utterance_dict = json_utterance_instance.to_dict()
# create an instance of JSONUtterance from a dict
json_utterance_from_dict = JSONUtterance.from_dict(json_utterance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


