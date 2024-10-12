# Subscription1

Subscription information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Is the subscription currently active? | [optional] 
**concurrent_devices_limit** | **int** | Customer limits on concurrent devices | [optional] 
**days_left** | **float** | The number of days left in the subscription | [optional] 
**ends_at** | **str** | The date the subscription will end or ended | [optional] 
**id** | **str** | Id of the subscription | [optional] 
**running_devices** | **int** | Current device concurrency utilization | [optional] 
**starts_at** | **str** | The date the subscription began | [optional] 
**tier** | [**SubscriptionTier**](SubscriptionTier.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription1 import Subscription1

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription1 from a JSON string
subscription1_instance = Subscription1.from_json(json)
# print the JSON string representation of the object
print(Subscription1.to_json())

# convert the object into a dict
subscription1_dict = subscription1_instance.to_dict()
# create an instance of Subscription1 from a dict
subscription1_from_dict = Subscription1.from_dict(subscription1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


