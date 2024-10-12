# ReservationMergeProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merge_destination** | **str** | Reservation Resource Id Created due to the merge. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | [optional] 
**merge_sources** | **List[str]** | Resource Ids of the Source Reservation&#39;s merged to form this Reservation. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | [optional] 

## Example

```python
from openapi_client.models.reservation_merge_properties import ReservationMergeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationMergeProperties from a JSON string
reservation_merge_properties_instance = ReservationMergeProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationMergeProperties.to_json())

# convert the object into a dict
reservation_merge_properties_dict = reservation_merge_properties_instance.to_dict()
# create an instance of ReservationMergeProperties from a dict
reservation_merge_properties_from_dict = ReservationMergeProperties.from_dict(reservation_merge_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


