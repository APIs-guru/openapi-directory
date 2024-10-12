# TransitTableTransitTimeRowTransitTimeValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_transit_time_in_days** | **int** | Must be greater than or equal to &#x60;minTransitTimeInDays&#x60;. | [optional] 
**min_transit_time_in_days** | **int** | Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery. | [optional] 

## Example

```python
from openapi_client.models.transit_table_transit_time_row_transit_time_value import TransitTableTransitTimeRowTransitTimeValue

# TODO update the JSON string below
json = "{}"
# create an instance of TransitTableTransitTimeRowTransitTimeValue from a JSON string
transit_table_transit_time_row_transit_time_value_instance = TransitTableTransitTimeRowTransitTimeValue.from_json(json)
# print the JSON string representation of the object
print(TransitTableTransitTimeRowTransitTimeValue.to_json())

# convert the object into a dict
transit_table_transit_time_row_transit_time_value_dict = transit_table_transit_time_row_transit_time_value_instance.to_dict()
# create an instance of TransitTableTransitTimeRowTransitTimeValue from a dict
transit_table_transit_time_row_transit_time_value_from_dict = TransitTableTransitTimeRowTransitTimeValue.from_dict(transit_table_transit_time_row_transit_time_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


