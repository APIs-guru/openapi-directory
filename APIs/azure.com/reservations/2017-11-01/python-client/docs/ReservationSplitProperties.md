# ReservationSplitProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**split_destinations** | **List[str]** | List of destination Resource Id that are created due to split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | [optional] 
**split_source** | **str** | Resource Id of the Reservation from which this is split. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | [optional] 

## Example

```python
from openapi_client.models.reservation_split_properties import ReservationSplitProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationSplitProperties from a JSON string
reservation_split_properties_instance = ReservationSplitProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationSplitProperties.to_json())

# convert the object into a dict
reservation_split_properties_dict = reservation_split_properties_instance.to_dict()
# create an instance of ReservationSplitProperties from a dict
reservation_split_properties_from_dict = ReservationSplitProperties.from_dict(reservation_split_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


