# GuestAttributesEntry

A guest attributes namespace/key/value entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key for the guest attribute entry. | [optional] 
**namespace** | **str** | Namespace for the guest attribute entry. | [optional] 
**value** | **str** | Value for the guest attribute entry. | [optional] 

## Example

```python
from openapi_client.models.guest_attributes_entry import GuestAttributesEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GuestAttributesEntry from a JSON string
guest_attributes_entry_instance = GuestAttributesEntry.from_json(json)
# print the JSON string representation of the object
print(GuestAttributesEntry.to_json())

# convert the object into a dict
guest_attributes_entry_dict = guest_attributes_entry_instance.to_dict()
# create an instance of GuestAttributesEntry from a dict
guest_attributes_entry_from_dict = GuestAttributesEntry.from_dict(guest_attributes_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


