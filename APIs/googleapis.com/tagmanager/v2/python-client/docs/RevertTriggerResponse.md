# RevertTriggerResponse

The result of reverting a trigger in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_trigger_response import RevertTriggerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertTriggerResponse from a JSON string
revert_trigger_response_instance = RevertTriggerResponse.from_json(json)
# print the JSON string representation of the object
print(RevertTriggerResponse.to_json())

# convert the object into a dict
revert_trigger_response_dict = revert_trigger_response_instance.to_dict()
# create an instance of RevertTriggerResponse from a dict
revert_trigger_response_from_dict = RevertTriggerResponse.from_dict(revert_trigger_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


