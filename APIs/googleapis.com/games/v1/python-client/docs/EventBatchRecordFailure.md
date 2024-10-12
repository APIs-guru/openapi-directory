# EventBatchRecordFailure

A batch update failure resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_cause** | **str** | The cause for the update failure. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventBatchRecordFailure&#x60;. | [optional] 
**range** | [**EventPeriodRange**](EventPeriodRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_batch_record_failure import EventBatchRecordFailure

# TODO update the JSON string below
json = "{}"
# create an instance of EventBatchRecordFailure from a JSON string
event_batch_record_failure_instance = EventBatchRecordFailure.from_json(json)
# print the JSON string representation of the object
print(EventBatchRecordFailure.to_json())

# convert the object into a dict
event_batch_record_failure_dict = event_batch_record_failure_instance.to_dict()
# create an instance of EventBatchRecordFailure from a dict
event_batch_record_failure_from_dict = EventBatchRecordFailure.from_dict(event_batch_record_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


