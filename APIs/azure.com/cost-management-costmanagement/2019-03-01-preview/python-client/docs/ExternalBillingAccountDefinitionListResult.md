# ExternalBillingAccountDefinitionListResult

Result of listing ExternalBillingAccount definitions. It contains a list of available ExternalBillingAccount definitions in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExternalBillingAccountDefinition]**](ExternalBillingAccountDefinition.md) | The list of ExternalBillingAccount definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_billing_account_definition_list_result import ExternalBillingAccountDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalBillingAccountDefinitionListResult from a JSON string
external_billing_account_definition_list_result_instance = ExternalBillingAccountDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(ExternalBillingAccountDefinitionListResult.to_json())

# convert the object into a dict
external_billing_account_definition_list_result_dict = external_billing_account_definition_list_result_instance.to_dict()
# create an instance of ExternalBillingAccountDefinitionListResult from a dict
external_billing_account_definition_list_result_from_dict = ExternalBillingAccountDefinitionListResult.from_dict(external_billing_account_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


