# SubscriptionOperationListResult

A list of pending subscription operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SubscriptionOperation]**](SubscriptionOperation.md) | A list of pending SubscriptionOperations | [optional] 

## Example

```python
from openapi_client.models.subscription_operation_list_result import SubscriptionOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionOperationListResult from a JSON string
subscription_operation_list_result_instance = SubscriptionOperationListResult.from_json(json)
# print the JSON string representation of the object
print(SubscriptionOperationListResult.to_json())

# convert the object into a dict
subscription_operation_list_result_dict = subscription_operation_list_result_instance.to_dict()
# create an instance of SubscriptionOperationListResult from a dict
subscription_operation_list_result_from_dict = SubscriptionOperationListResult.from_dict(subscription_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


