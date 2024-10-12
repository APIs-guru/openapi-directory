# Filter

An expression to filter dimension or metric values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**between_filter** | [**BetweenFilter**](BetweenFilter.md) |  | [optional] 
**field_name** | **str** | The dimension name or metric name. In most methods, dimensions &amp; metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest&#39;s dimensions or metrics. | [optional] 
**in_list_filter** | [**InListFilter**](InListFilter.md) |  | [optional] 
**numeric_filter** | [**NumericFilter**](NumericFilter.md) |  | [optional] 
**string_filter** | [**StringFilter**](StringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter import Filter

# TODO update the JSON string below
json = "{}"
# create an instance of Filter from a JSON string
filter_instance = Filter.from_json(json)
# print the JSON string representation of the object
print(Filter.to_json())

# convert the object into a dict
filter_dict = filter_instance.to_dict()
# create an instance of Filter from a dict
filter_from_dict = Filter.from_dict(filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


