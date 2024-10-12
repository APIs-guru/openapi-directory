# ReservationOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **int** |  | [optional] 
**id** | **str** | Identifier of the reservation | [optional] [readonly] 
**name** | **str** | Name of the reservation | [optional] [readonly] 
**properties** | [**ReservationOrderProperties**](ReservationOrderProperties.md) |  | [optional] 
**type** | **str** | Type of resource. \&quot;Microsoft.Capacity/reservations\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_order_response import ReservationOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationOrderResponse from a JSON string
reservation_order_response_instance = ReservationOrderResponse.from_json(json)
# print the JSON string representation of the object
print(ReservationOrderResponse.to_json())

# convert the object into a dict
reservation_order_response_dict = reservation_order_response_instance.to_dict()
# create an instance of ReservationOrderResponse from a dict
reservation_order_response_from_dict = ReservationOrderResponse.from_dict(reservation_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


