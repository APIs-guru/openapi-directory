# TriggerSubscriptionOperationStatus

Defines the response of a trigger subscription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Event Subscription Status. | [optional] [readonly] 
**trigger_name** | **str** | Trigger name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trigger_subscription_operation_status import TriggerSubscriptionOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerSubscriptionOperationStatus from a JSON string
trigger_subscription_operation_status_instance = TriggerSubscriptionOperationStatus.from_json(json)
# print the JSON string representation of the object
print(TriggerSubscriptionOperationStatus.to_json())

# convert the object into a dict
trigger_subscription_operation_status_dict = trigger_subscription_operation_status_instance.to_dict()
# create an instance of TriggerSubscriptionOperationStatus from a dict
trigger_subscription_operation_status_from_dict = TriggerSubscriptionOperationStatus.from_dict(trigger_subscription_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


