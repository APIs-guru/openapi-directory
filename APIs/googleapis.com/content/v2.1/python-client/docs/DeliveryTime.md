# DeliveryTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cutoff_time** | [**CutoffTime**](CutoffTime.md) |  | [optional] 
**handling_business_day_config** | [**BusinessDayConfig**](BusinessDayConfig.md) |  | [optional] 
**holiday_cutoffs** | [**List[HolidayCutoff]**](HolidayCutoff.md) | Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping. | [optional] 
**max_handling_time_in_days** | **int** | Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to &#x60;minHandlingTimeInDays&#x60;. | [optional] 
**max_transit_time_in_days** | **int** | Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to &#x60;minTransitTimeInDays&#x60;. | [optional] 
**min_handling_time_in_days** | **int** | Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. | [optional] 
**min_transit_time_in_days** | **int** | Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either &#x60;{min,max}TransitTimeInDays&#x60; or &#x60;transitTimeTable&#x60; must be set, but not both. | [optional] 
**transit_business_day_config** | [**BusinessDayConfig**](BusinessDayConfig.md) |  | [optional] 
**transit_time_table** | [**TransitTable**](TransitTable.md) |  | [optional] 
**warehouse_based_delivery_times** | [**List[WarehouseBasedDeliveryTime]**](WarehouseBasedDeliveryTime.md) | Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set. | [optional] 

## Example

```python
from openapi_client.models.delivery_time import DeliveryTime

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryTime from a JSON string
delivery_time_instance = DeliveryTime.from_json(json)
# print the JSON string representation of the object
print(DeliveryTime.to_json())

# convert the object into a dict
delivery_time_dict = delivery_time_instance.to_dict()
# create an instance of DeliveryTime from a dict
delivery_time_from_dict = DeliveryTime.from_dict(delivery_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


