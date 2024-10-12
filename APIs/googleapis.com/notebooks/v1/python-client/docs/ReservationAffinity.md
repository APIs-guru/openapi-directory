# ReservationAffinity

Reservation Affinity for consuming Zonal reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consume_reservation_type** | **str** | Optional. Type of reservation to consume | [optional] 
**key** | **str** | Optional. Corresponds to the label key of reservation resource. | [optional] 
**values** | **List[str]** | Optional. Corresponds to the label values of reservation resource. | [optional] 

## Example

```python
from openapi_client.models.reservation_affinity import ReservationAffinity

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationAffinity from a JSON string
reservation_affinity_instance = ReservationAffinity.from_json(json)
# print the JSON string representation of the object
print(ReservationAffinity.to_json())

# convert the object into a dict
reservation_affinity_dict = reservation_affinity_instance.to_dict()
# create an instance of ReservationAffinity from a dict
reservation_affinity_from_dict = ReservationAffinity.from_dict(reservation_affinity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


