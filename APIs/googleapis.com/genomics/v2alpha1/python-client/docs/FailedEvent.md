# FailedEvent

An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | The human-readable description of the cause of the failure. | [optional] 
**code** | **str** | The Google standard error code that best describes this failure. | [optional] 

## Example

```python
from openapi_client.models.failed_event import FailedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of FailedEvent from a JSON string
failed_event_instance = FailedEvent.from_json(json)
# print the JSON string representation of the object
print(FailedEvent.to_json())

# convert the object into a dict
failed_event_dict = failed_event_instance.to_dict()
# create an instance of FailedEvent from a dict
failed_event_from_dict = FailedEvent.from_dict(failed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


