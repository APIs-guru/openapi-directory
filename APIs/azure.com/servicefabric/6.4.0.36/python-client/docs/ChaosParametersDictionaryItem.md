# ChaosParametersDictionaryItem

Defines an item in ChaosParametersDictionary of the Chaos Schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key identifying the Chaos Parameter in the dictionary. This key is referenced by Chaos Schedule Jobs. | 
**value** | [**ChaosParameters**](ChaosParameters.md) |  | 

## Example

```python
from openapi_client.models.chaos_parameters_dictionary_item import ChaosParametersDictionaryItem

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosParametersDictionaryItem from a JSON string
chaos_parameters_dictionary_item_instance = ChaosParametersDictionaryItem.from_json(json)
# print the JSON string representation of the object
print(ChaosParametersDictionaryItem.to_json())

# convert the object into a dict
chaos_parameters_dictionary_item_dict = chaos_parameters_dictionary_item_instance.to_dict()
# create an instance of ChaosParametersDictionaryItem from a dict
chaos_parameters_dictionary_item_from_dict = ChaosParametersDictionaryItem.from_dict(chaos_parameters_dictionary_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


