# ExternalSubscriptionDefinition

The ExternalSubscription model definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ExternalSubscription id | [optional] [readonly] 
**kind** | **str** | ExternalSubscription kind (eg aws) | [optional] [readonly] 
**name** | **str** | ExternalSubscription name | [optional] [readonly] 
**properties** | [**ExternalSubscriptionProperties**](ExternalSubscriptionProperties.md) |  | [optional] 
**type** | **str** | ExternalSubscription type | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_subscription_definition import ExternalSubscriptionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubscriptionDefinition from a JSON string
external_subscription_definition_instance = ExternalSubscriptionDefinition.from_json(json)
# print the JSON string representation of the object
print(ExternalSubscriptionDefinition.to_json())

# convert the object into a dict
external_subscription_definition_dict = external_subscription_definition_instance.to_dict()
# create an instance of ExternalSubscriptionDefinition from a dict
external_subscription_definition_from_dict = ExternalSubscriptionDefinition.from_dict(external_subscription_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


