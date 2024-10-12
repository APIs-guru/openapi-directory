# LogToMetricAction

Specify action need to be taken when rule type is converting log to metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**List[Criteria]**](Criteria.md) | Criteria of Metric | 

## Example

```python
from openapi_client.models.log_to_metric_action import LogToMetricAction

# TODO update the JSON string below
json = "{}"
# create an instance of LogToMetricAction from a JSON string
log_to_metric_action_instance = LogToMetricAction.from_json(json)
# print the JSON string representation of the object
print(LogToMetricAction.to_json())

# convert the object into a dict
log_to_metric_action_dict = log_to_metric_action_instance.to_dict()
# create an instance of LogToMetricAction from a dict
log_to_metric_action_from_dict = LogToMetricAction.from_dict(log_to_metric_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


