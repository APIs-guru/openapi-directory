# SBSubscription

Description of subscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SBSubscriptionProperties**](SBSubscriptionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_subscription import SBSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of SBSubscription from a JSON string
sb_subscription_instance = SBSubscription.from_json(json)
# print the JSON string representation of the object
print(SBSubscription.to_json())

# convert the object into a dict
sb_subscription_dict = sb_subscription_instance.to_dict()
# create an instance of SBSubscription from a dict
sb_subscription_from_dict = SBSubscription.from_dict(sb_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


