# ReservationSummariesProperties

The properties of the reservation summaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_utilization_percentage** | **float** | This is average utilization for the entire time range. (day or month depending on the grain) | [optional] [readonly] 
**max_utilization_percentage** | **float** | This is the maximum hourly utilization in the usage time (day or month). E.g. if usage record corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was 100%, this field will return 100% for that day. | [optional] [readonly] 
**min_utilization_percentage** | **float** | This is the minimum hourly utilization in the usage time (day or month). E.g. if usage record corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was 10%, this field will return 10% for that day | [optional] [readonly] 
**reservation_id** | **str** | The reservation ID is the identifier of a reservation within a reservation order. Each reservation is the grouping for applying the benefit scope and also specifies the number of instances to which the reservation benefit can be applied to. | [optional] [readonly] 
**reservation_order_id** | **str** | The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations. | [optional] [readonly] 
**reserved_hours** | **float** | This is the total hours reserved. E.g. if reservation for 1 instance was made on 1 PM, this will be 11 hours for that day and 24 hours from subsequent days | [optional] [readonly] 
**sku_name** | **str** | This is the ARM Sku name. It can be used to join with the serviceType field in additional info in usage records. | [optional] [readonly] 
**usage_date** | **datetime** | Data corresponding to the utilization record. If the grain of data is monthly, it will be first day of month. | [optional] [readonly] 
**used_hours** | **float** | Total used hours by the reservation | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_summaries_properties import ReservationSummariesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationSummariesProperties from a JSON string
reservation_summaries_properties_instance = ReservationSummariesProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationSummariesProperties.to_json())

# convert the object into a dict
reservation_summaries_properties_dict = reservation_summaries_properties_instance.to_dict()
# create an instance of ReservationSummariesProperties from a dict
reservation_summaries_properties_from_dict = ReservationSummariesProperties.from_dict(reservation_summaries_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


