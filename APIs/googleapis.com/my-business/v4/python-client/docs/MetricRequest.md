# MetricRequest

A request to return values for one metric and the options for how those values should be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **str** | The requested metric. | [optional] 
**options** | **List[str]** | How the values should appear when returned. | [optional] 

## Example

```python
from openapi_client.models.metric_request import MetricRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MetricRequest from a JSON string
metric_request_instance = MetricRequest.from_json(json)
# print the JSON string representation of the object
print(MetricRequest.to_json())

# convert the object into a dict
metric_request_dict = metric_request_instance.to_dict()
# create an instance of MetricRequest from a dict
metric_request_from_dict = MetricRequest.from_dict(metric_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


