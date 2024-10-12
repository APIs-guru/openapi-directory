# Intention


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evidence_phrase** | **str** | The phrase which expressed the intention | 
**type** | **str** | The classification of the intention detected (buy, quit, etc.) | 
**what** | **str** | The object of the intention (if detected) | 
**who** | **str** | The author of the intention (if detected) | 

## Example

```python
from openapi_client.models.intention import Intention

# TODO update the JSON string below
json = "{}"
# create an instance of Intention from a JSON string
intention_instance = Intention.from_json(json)
# print the JSON string representation of the object
print(Intention.to_json())

# convert the object into a dict
intention_dict = intention_instance.to_dict()
# create an instance of Intention from a dict
intention_from_dict = Intention.from_dict(intention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


