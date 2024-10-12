# ActiveMetricRestriction

A metric actively restricted in creating the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | The name of the restricted metric. | [optional] 
**restricted_metric_types** | **List[str]** | The reason for this metric&#39;s restriction. | [optional] 

## Example

```python
from openapi_client.models.active_metric_restriction import ActiveMetricRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveMetricRestriction from a JSON string
active_metric_restriction_instance = ActiveMetricRestriction.from_json(json)
# print the JSON string representation of the object
print(ActiveMetricRestriction.to_json())

# convert the object into a dict
active_metric_restriction_dict = active_metric_restriction_instance.to_dict()
# create an instance of ActiveMetricRestriction from a dict
active_metric_restriction_from_dict = ActiveMetricRestriction.from_dict(active_metric_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


