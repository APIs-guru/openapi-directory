# TriggerRolloverRequest

Trigger Rollover Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server_certificate** | **str** | Certificate Data | [optional] 

## Example

```python
from openapi_client.models.trigger_rollover_request import TriggerRolloverRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerRolloverRequest from a JSON string
trigger_rollover_request_instance = TriggerRolloverRequest.from_json(json)
# print the JSON string representation of the object
print(TriggerRolloverRequest.to_json())

# convert the object into a dict
trigger_rollover_request_dict = trigger_rollover_request_instance.to_dict()
# create an instance of TriggerRolloverRequest from a dict
trigger_rollover_request_from_dict = TriggerRolloverRequest.from_dict(trigger_rollover_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


