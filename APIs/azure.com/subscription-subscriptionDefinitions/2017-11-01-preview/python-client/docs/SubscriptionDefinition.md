# SubscriptionDefinition

The subscription definition used to create the subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**properties** | [**SubscriptionDefinitionProperties**](SubscriptionDefinitionProperties.md) |  | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_definition import SubscriptionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDefinition from a JSON string
subscription_definition_instance = SubscriptionDefinition.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDefinition.to_json())

# convert the object into a dict
subscription_definition_dict = subscription_definition_instance.to_dict()
# create an instance of SubscriptionDefinition from a dict
subscription_definition_from_dict = SubscriptionDefinition.from_dict(subscription_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


