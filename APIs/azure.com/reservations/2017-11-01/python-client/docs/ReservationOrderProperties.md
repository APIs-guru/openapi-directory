# ReservationOrderProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date_time** | **datetime** | This is the DateTime when the reservation was created. | [optional] 
**display_name** | **str** | Friendly name for user to easily identified the reservation. | [optional] 
**expiry_date** | **date** | This is the date when the Reservation will expire. | [optional] 
**original_quantity** | **int** | Total Quantity of the SKUs purchased in the Reservation. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**request_date_time** | **datetime** | This is the DateTime when the reservation was initially requested for purchase. | [optional] 
**reservations** | [**List[ReservationResponse]**](ReservationResponse.md) |  | [optional] 
**term** | [**ReservationTerm**](ReservationTerm.md) |  | [optional] 

## Example

```python
from openapi_client.models.reservation_order_properties import ReservationOrderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationOrderProperties from a JSON string
reservation_order_properties_instance = ReservationOrderProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationOrderProperties.to_json())

# convert the object into a dict
reservation_order_properties_dict = reservation_order_properties_instance.to_dict()
# create an instance of ReservationOrderProperties from a dict
reservation_order_properties_from_dict = ReservationOrderProperties.from_dict(reservation_order_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


