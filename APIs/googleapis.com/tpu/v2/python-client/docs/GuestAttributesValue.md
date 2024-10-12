# GuestAttributesValue

Array of guest attribute namespace/key/value tuples.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GuestAttributesEntry]**](GuestAttributesEntry.md) | The list of guest attributes entries. | [optional] 

## Example

```python
from openapi_client.models.guest_attributes_value import GuestAttributesValue

# TODO update the JSON string below
json = "{}"
# create an instance of GuestAttributesValue from a JSON string
guest_attributes_value_instance = GuestAttributesValue.from_json(json)
# print the JSON string representation of the object
print(GuestAttributesValue.to_json())

# convert the object into a dict
guest_attributes_value_dict = guest_attributes_value_instance.to_dict()
# create an instance of GuestAttributesValue from a dict
guest_attributes_value_from_dict = GuestAttributesValue.from_dict(guest_attributes_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


