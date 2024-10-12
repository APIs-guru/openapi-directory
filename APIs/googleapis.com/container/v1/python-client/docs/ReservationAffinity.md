# ReservationAffinity

[ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consume_reservation_type** | **str** | Corresponds to the type of reservation consumption. | [optional] 
**key** | **str** | Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify \&quot;compute.googleapis.com/reservation-name\&quot; as the key and specify the name of your reservation as its value. | [optional] 
**values** | **List[str]** | Corresponds to the label value(s) of reservation resource(s). | [optional] 

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


