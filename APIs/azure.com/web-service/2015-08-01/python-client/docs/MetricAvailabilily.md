# MetricAvailabilily

Class representing metrics availability and retention

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention period for the current {Microsoft.Web.Hosting.Administration.MetricAvailabilily.TimeGrain} | [optional] 
**time_grain** | **str** | Time grain | [optional] 

## Example

```python
from openapi_client.models.metric_availabilily import MetricAvailabilily

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAvailabilily from a JSON string
metric_availabilily_instance = MetricAvailabilily.from_json(json)
# print the JSON string representation of the object
print(MetricAvailabilily.to_json())

# convert the object into a dict
metric_availabilily_dict = metric_availabilily_instance.to_dict()
# create an instance of MetricAvailabilily from a dict
metric_availabilily_from_dict = MetricAvailabilily.from_dict(metric_availabilily_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


