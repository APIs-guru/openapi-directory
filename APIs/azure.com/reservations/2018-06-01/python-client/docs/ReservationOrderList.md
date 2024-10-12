# ReservationOrderList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Url to get the next page of reservationOrders. | [optional] 
**value** | [**List[ReservationOrderResponse]**](ReservationOrderResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.reservation_order_list import ReservationOrderList

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationOrderList from a JSON string
reservation_order_list_instance = ReservationOrderList.from_json(json)
# print the JSON string representation of the object
print(ReservationOrderList.to_json())

# convert the object into a dict
reservation_order_list_dict = reservation_order_list_instance.to_dict()
# create an instance of ReservationOrderList from a dict
reservation_order_list_from_dict = ReservationOrderList.from_dict(reservation_order_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


