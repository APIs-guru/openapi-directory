# ReservationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **int** |  | [optional] 
**id** | **str** | Identifier of the reservation | [optional] [readonly] 
**location** | **str** | The Azure Region where the reserved resource lives. | [optional] [readonly] 
**name** | **str** | Name of the reservation | [optional] [readonly] 
**properties** | [**ReservationProperties**](ReservationProperties.md) |  | [optional] 
**sku** | [**SkuName**](SkuName.md) |  | [optional] 
**type** | **str** | Type of resource. \&quot;Microsoft.Capacity/reservationOrders/reservations\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_response import ReservationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationResponse from a JSON string
reservation_response_instance = ReservationResponse.from_json(json)
# print the JSON string representation of the object
print(ReservationResponse.to_json())

# convert the object into a dict
reservation_response_dict = reservation_response_instance.to_dict()
# create an instance of ReservationResponse from a dict
reservation_response_from_dict = ReservationResponse.from_dict(reservation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


