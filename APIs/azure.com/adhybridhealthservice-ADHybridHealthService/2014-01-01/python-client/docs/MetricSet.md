# MetricSet

 The set of metric values. Example of a MetricSet are Values of token requests for a Server1 or RelyingParty1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**set_name** | **str** | The name of the set. | [optional] 
**values** | **List[int]** | The list of the metric values. | [optional] 

## Example

```python
from openapi_client.models.metric_set import MetricSet

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSet from a JSON string
metric_set_instance = MetricSet.from_json(json)
# print the JSON string representation of the object
print(MetricSet.to_json())

# convert the object into a dict
metric_set_dict = metric_set_instance.to_dict()
# create an instance of MetricSet from a dict
metric_set_from_dict = MetricSet.from_dict(metric_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


