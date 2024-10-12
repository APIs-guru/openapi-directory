# ManagedPropertyEntry

An entry of a managed property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The human-readable name of the value. Localized. | [optional] 
**value** | **str** | The machine-readable value of the entry, which should be used in the configuration. Not localized. | [optional] 

## Example

```python
from openapi_client.models.managed_property_entry import ManagedPropertyEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedPropertyEntry from a JSON string
managed_property_entry_instance = ManagedPropertyEntry.from_json(json)
# print the JSON string representation of the object
print(ManagedPropertyEntry.to_json())

# convert the object into a dict
managed_property_entry_dict = managed_property_entry_instance.to_dict()
# create an instance of ManagedPropertyEntry from a dict
managed_property_entry_from_dict = ManagedPropertyEntry.from_dict(managed_property_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


