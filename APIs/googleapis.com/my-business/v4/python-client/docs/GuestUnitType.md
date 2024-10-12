# GuestUnitType

A specific type of unit primarily defined by its features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codes** | **List[str]** | Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance. | [optional] 
**features** | [**GuestUnitFeatures**](GuestUnitFeatures.md) |  | [optional] 
**label** | **str** | Required. Short, English label or name of the GuestUnitType. Target &lt;50 chars. | [optional] 

## Example

```python
from openapi_client.models.guest_unit_type import GuestUnitType

# TODO update the JSON string below
json = "{}"
# create an instance of GuestUnitType from a JSON string
guest_unit_type_instance = GuestUnitType.from_json(json)
# print the JSON string representation of the object
print(GuestUnitType.to_json())

# convert the object into a dict
guest_unit_type_dict = guest_unit_type_instance.to_dict()
# create an instance of GuestUnitType from a dict
guest_unit_type_from_dict = GuestUnitType.from_dict(guest_unit_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


