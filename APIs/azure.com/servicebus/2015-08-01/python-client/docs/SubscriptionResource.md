# SubscriptionResource

Description of subscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionProperties**](SubscriptionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_resource import SubscriptionResource

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionResource from a JSON string
subscription_resource_instance = SubscriptionResource.from_json(json)
# print the JSON string representation of the object
print(SubscriptionResource.to_json())

# convert the object into a dict
subscription_resource_dict = subscription_resource_instance.to_dict()
# create an instance of SubscriptionResource from a dict
subscription_resource_from_dict = SubscriptionResource.from_dict(subscription_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


