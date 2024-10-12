# Subscription

Resource capturing the state of an organization's subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**Details**](Details.md) |  | [optional] 
**name** | **str** | The resource name of the subscription. Format: organizations/{organization}/subscription | [optional] 
**tier** | **str** | The tier of SCC features this organization currently has access to. | [optional] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


