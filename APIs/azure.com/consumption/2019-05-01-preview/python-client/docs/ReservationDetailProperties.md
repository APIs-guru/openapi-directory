# ReservationDetailProperties

The properties of the reservation detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | This identifier is the name of the resource or the fully qualified Resource ID. | [optional] [readonly] 
**reservation_id** | **str** | The reservation ID is the identifier of a reservation within a reservation order. Each reservation is the grouping for applying the benefit scope and also specifies the number of instances to which the reservation benefit can be applied to. | [optional] [readonly] 
**reservation_order_id** | **str** | The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations. | [optional] [readonly] 
**reserved_hours** | **float** | This is the total hours reserved for the day. E.g. if reservation for 1 instance was made on 1 PM, this will be 11 hours for that day and 24 hours from subsequent days. | [optional] [readonly] 
**sku_name** | **str** | This is the ARM Sku name. It can be used to join with the serviceType field in additional info in usage records. | [optional] [readonly] 
**total_reserved_quantity** | **float** | This is the total count of instances that are reserved for the reservationId. | [optional] [readonly] 
**usage_date** | **datetime** | The date on which consumption occurred. | [optional] [readonly] 
**used_hours** | **float** | This is the total hours used by the instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_detail_properties import ReservationDetailProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationDetailProperties from a JSON string
reservation_detail_properties_instance = ReservationDetailProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationDetailProperties.to_json())

# convert the object into a dict
reservation_detail_properties_dict = reservation_detail_properties_instance.to_dict()
# create an instance of ReservationDetailProperties from a dict
reservation_detail_properties_from_dict = ReservationDetailProperties.from_dict(reservation_detail_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


