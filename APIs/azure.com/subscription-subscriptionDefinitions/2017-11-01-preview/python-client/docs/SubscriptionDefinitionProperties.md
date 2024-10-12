# SubscriptionDefinitionProperties

The subscription definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The etag the subscription definition. | [optional] 
**offer_type** | **str** | The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. | [optional] 
**subscription_display_name** | **str** | The display name of the subscription. | [optional] 
**subscription_id** | **str** | The ID of the subscription. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_definition_properties import SubscriptionDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDefinitionProperties from a JSON string
subscription_definition_properties_instance = SubscriptionDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDefinitionProperties.to_json())

# convert the object into a dict
subscription_definition_properties_dict = subscription_definition_properties_instance.to_dict()
# create an instance of SubscriptionDefinitionProperties from a dict
subscription_definition_properties_from_dict = SubscriptionDefinitionProperties.from_dict(subscription_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


