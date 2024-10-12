# EnabledSubscriptionId

The ID of the subscriptions that is being enabled

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The ID of the subscriptions that is being enabled | [optional] [readonly] 

## Example

```python
from openapi_client.models.enabled_subscription_id import EnabledSubscriptionId

# TODO update the JSON string below
json = "{}"
# create an instance of EnabledSubscriptionId from a JSON string
enabled_subscription_id_instance = EnabledSubscriptionId.from_json(json)
# print the JSON string representation of the object
print(EnabledSubscriptionId.to_json())

# convert the object into a dict
enabled_subscription_id_dict = enabled_subscription_id_instance.to_dict()
# create an instance of EnabledSubscriptionId from a dict
enabled_subscription_id_from_dict = EnabledSubscriptionId.from_dict(enabled_subscription_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


