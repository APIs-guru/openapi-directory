# MetricsThisWeek

Summary totals for the last 7 days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **int** | APIs added in the last week | [optional] 
**updated** | **int** | APIs updated in the last week | [optional] 

## Example

```python
from openapi_client.models.metrics_this_week import MetricsThisWeek

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsThisWeek from a JSON string
metrics_this_week_instance = MetricsThisWeek.from_json(json)
# print the JSON string representation of the object
print(MetricsThisWeek.to_json())

# convert the object into a dict
metrics_this_week_dict = metrics_this_week_instance.to_dict()
# create an instance of MetricsThisWeek from a dict
metrics_this_week_from_dict = MetricsThisWeek.from_dict(metrics_this_week_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


