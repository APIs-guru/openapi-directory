# CanceledSubscriptionId

The ID of the canceled subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The ID of the canceled subscription | [optional] [readonly] 

## Example

```python
from openapi_client.models.canceled_subscription_id import CanceledSubscriptionId

# TODO update the JSON string below
json = "{}"
# create an instance of CanceledSubscriptionId from a JSON string
canceled_subscription_id_instance = CanceledSubscriptionId.from_json(json)
# print the JSON string representation of the object
print(CanceledSubscriptionId.to_json())

# convert the object into a dict
canceled_subscription_id_dict = canceled_subscription_id_instance.to_dict()
# create an instance of CanceledSubscriptionId from a dict
canceled_subscription_id_from_dict = CanceledSubscriptionId.from_dict(canceled_subscription_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


