# AddressSuggestion

Represents an address suggestion for any address in the world

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Global unique internally generated identifier for an address | 
**suggestion** | **str** | Address Suggestion to be displayed to the user | 
**urls** | **object** |  | 

## Example

```python
from openapi_client.models.address_suggestion import AddressSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of AddressSuggestion from a JSON string
address_suggestion_instance = AddressSuggestion.from_json(json)
# print the JSON string representation of the object
print(AddressSuggestion.to_json())

# convert the object into a dict
address_suggestion_dict = address_suggestion_instance.to_dict()
# create an instance of AddressSuggestion from a dict
address_suggestion_from_dict = AddressSuggestion.from_dict(address_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


