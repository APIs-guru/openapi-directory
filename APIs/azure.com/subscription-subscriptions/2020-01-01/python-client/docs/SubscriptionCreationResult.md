# SubscriptionCreationResult

The created subscription object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_link** | **str** | The link to the new subscription. Use this link to check the status of subscription creation operation. | [optional] 

## Example

```python
from openapi_client.models.subscription_creation_result import SubscriptionCreationResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreationResult from a JSON string
subscription_creation_result_instance = SubscriptionCreationResult.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCreationResult.to_json())

# convert the object into a dict
subscription_creation_result_dict = subscription_creation_result_instance.to_dict()
# create an instance of SubscriptionCreationResult from a dict
subscription_creation_result_from_dict = SubscriptionCreationResult.from_dict(subscription_creation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


