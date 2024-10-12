# SubscriptionOperation

status of the subscription POST operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The operation Id. | [optional] [readonly] 
**status** | **str** | Status of the pending subscription | [optional] 
**status_detail** | **str** | Status Detail of the pending subscription | [optional] 

## Example

```python
from openapi_client.models.subscription_operation import SubscriptionOperation

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionOperation from a JSON string
subscription_operation_instance = SubscriptionOperation.from_json(json)
# print the JSON string representation of the object
print(SubscriptionOperation.to_json())

# convert the object into a dict
subscription_operation_dict = subscription_operation_instance.to_dict()
# create an instance of SubscriptionOperation from a dict
subscription_operation_from_dict = SubscriptionOperation.from_dict(subscription_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


