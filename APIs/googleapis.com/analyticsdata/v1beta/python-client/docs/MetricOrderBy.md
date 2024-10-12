# MetricOrderBy

Sorts by metric values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | A metric name in the request to order by. | [optional] 

## Example

```python
from openapi_client.models.metric_order_by import MetricOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of MetricOrderBy from a JSON string
metric_order_by_instance = MetricOrderBy.from_json(json)
# print the JSON string representation of the object
print(MetricOrderBy.to_json())

# convert the object into a dict
metric_order_by_dict = metric_order_by_instance.to_dict()
# create an instance of MetricOrderBy from a dict
metric_order_by_from_dict = MetricOrderBy.from_dict(metric_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


