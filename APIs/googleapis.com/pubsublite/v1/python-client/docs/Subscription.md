# Subscription

Metadata about a subscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_config** | [**DeliveryConfig**](DeliveryConfig.md) |  | [optional] 
**export_config** | [**ExportConfig**](ExportConfig.md) |  | [optional] 
**name** | **str** | The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} | [optional] 
**topic** | **str** | The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} | [optional] 

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


