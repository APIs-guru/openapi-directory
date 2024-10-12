# AppliedReservations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the applied reservations | [optional] [readonly] 
**name** | **str** | Name of resource | [optional] [readonly] 
**properties** | [**AppliedReservationsProperties**](AppliedReservationsProperties.md) |  | [optional] 
**type** | **str** | Type of resource. \&quot;Microsoft.Capacity/AppliedReservations\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.applied_reservations import AppliedReservations

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedReservations from a JSON string
applied_reservations_instance = AppliedReservations.from_json(json)
# print the JSON string representation of the object
print(AppliedReservations.to_json())

# convert the object into a dict
applied_reservations_dict = applied_reservations_instance.to_dict()
# create an instance of AppliedReservations from a dict
applied_reservations_from_dict = AppliedReservations.from_dict(applied_reservations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


