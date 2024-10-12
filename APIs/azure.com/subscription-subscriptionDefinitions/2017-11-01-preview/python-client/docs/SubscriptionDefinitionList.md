# SubscriptionDefinitionList

Subscription Definition List operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[SubscriptionDefinition]**](SubscriptionDefinition.md) | An array of subscriptionDefinitions | [optional] 

## Example

```python
from openapi_client.models.subscription_definition_list import SubscriptionDefinitionList

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDefinitionList from a JSON string
subscription_definition_list_instance = SubscriptionDefinitionList.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDefinitionList.to_json())

# convert the object into a dict
subscription_definition_list_dict = subscription_definition_list_instance.to_dict()
# create an instance of SubscriptionDefinitionList from a dict
subscription_definition_list_from_dict = SubscriptionDefinitionList.from_dict(subscription_definition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


