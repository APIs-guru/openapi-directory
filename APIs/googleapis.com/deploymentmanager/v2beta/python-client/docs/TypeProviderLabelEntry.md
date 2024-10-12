# TypeProviderLabelEntry

Label object for TypeProviders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key of the label | [optional] 
**value** | **str** | Value of the label | [optional] 

## Example

```python
from openapi_client.models.type_provider_label_entry import TypeProviderLabelEntry

# TODO update the JSON string below
json = "{}"
# create an instance of TypeProviderLabelEntry from a JSON string
type_provider_label_entry_instance = TypeProviderLabelEntry.from_json(json)
# print the JSON string representation of the object
print(TypeProviderLabelEntry.to_json())

# convert the object into a dict
type_provider_label_entry_dict = type_provider_label_entry_instance.to_dict()
# create an instance of TypeProviderLabelEntry from a dict
type_provider_label_entry_from_dict = TypeProviderLabelEntry.from_dict(type_provider_label_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


