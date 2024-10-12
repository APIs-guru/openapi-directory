# AppliedReservationsProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reservation_order_ids** | [**AppliedReservationList**](AppliedReservationList.md) |  | [optional] 

## Example

```python
from openapi_client.models.applied_reservations_properties import AppliedReservationsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedReservationsProperties from a JSON string
applied_reservations_properties_instance = AppliedReservationsProperties.from_json(json)
# print the JSON string representation of the object
print(AppliedReservationsProperties.to_json())

# convert the object into a dict
applied_reservations_properties_dict = applied_reservations_properties_instance.to_dict()
# create an instance of AppliedReservationsProperties from a dict
applied_reservations_properties_from_dict = AppliedReservationsProperties.from_dict(applied_reservations_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


