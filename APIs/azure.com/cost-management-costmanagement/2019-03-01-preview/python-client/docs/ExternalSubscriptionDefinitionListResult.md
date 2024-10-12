# ExternalSubscriptionDefinitionListResult

Result of listing ExternalSubscription definitions. It contains a list of available ExternalSubscription definitions in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExternalSubscriptionDefinition]**](ExternalSubscriptionDefinition.md) | The list of ExternalSubscription definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_subscription_definition_list_result import ExternalSubscriptionDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubscriptionDefinitionListResult from a JSON string
external_subscription_definition_list_result_instance = ExternalSubscriptionDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(ExternalSubscriptionDefinitionListResult.to_json())

# convert the object into a dict
external_subscription_definition_list_result_dict = external_subscription_definition_list_result_instance.to_dict()
# create an instance of ExternalSubscriptionDefinitionListResult from a dict
external_subscription_definition_list_result_from_dict = ExternalSubscriptionDefinitionListResult.from_dict(external_subscription_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


