# DateRangeValues

Used to return a list of metrics for a single DateRange / dimension combination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pivot_value_regions** | [**List[PivotValueRegion]**](PivotValueRegion.md) | The values of each pivot region. | [optional] 
**values** | **List[str]** | Each value corresponds to each Metric in the request. | [optional] 

## Example

```python
from openapi_client.models.date_range_values import DateRangeValues

# TODO update the JSON string below
json = "{}"
# create an instance of DateRangeValues from a JSON string
date_range_values_instance = DateRangeValues.from_json(json)
# print the JSON string representation of the object
print(DateRangeValues.to_json())

# convert the object into a dict
date_range_values_dict = date_range_values_instance.to_dict()
# create an instance of DateRangeValues from a dict
date_range_values_from_dict = DateRangeValues.from_dict(date_range_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


