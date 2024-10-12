# QueueingPolicy

Defines the policy of the QueuedRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_after_duration** | **str** | A relative time after which resources may be created. | [optional] 
**valid_after_time** | **str** | An absolute time at which resources may be created. | [optional] 
**valid_interval** | [**Interval**](Interval.md) |  | [optional] 
**valid_until_duration** | **str** | A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. | [optional] 
**valid_until_time** | **str** | An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. | [optional] 

## Example

```python
from openapi_client.models.queueing_policy import QueueingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of QueueingPolicy from a JSON string
queueing_policy_instance = QueueingPolicy.from_json(json)
# print the JSON string representation of the object
print(QueueingPolicy.to_json())

# convert the object into a dict
queueing_policy_dict = queueing_policy_instance.to_dict()
# create an instance of QueueingPolicy from a dict
queueing_policy_from_dict = QueueingPolicy.from_dict(queueing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


