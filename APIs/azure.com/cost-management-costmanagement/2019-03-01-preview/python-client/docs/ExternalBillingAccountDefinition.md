# ExternalBillingAccountDefinition

The ExternalBillingAccount model definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ExternalBillingAccount id | [optional] [readonly] 
**kind** | **str** | ExternalBillingAccount kind (eg aws) | [optional] [readonly] 
**name** | **str** | ExternalBillingAccount name | [optional] [readonly] 
**properties** | [**ExternalBillingAccountProperties**](ExternalBillingAccountProperties.md) |  | [optional] 
**type** | **str** | ExternalBillingAccount type | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_billing_account_definition import ExternalBillingAccountDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalBillingAccountDefinition from a JSON string
external_billing_account_definition_instance = ExternalBillingAccountDefinition.from_json(json)
# print the JSON string representation of the object
print(ExternalBillingAccountDefinition.to_json())

# convert the object into a dict
external_billing_account_definition_dict = external_billing_account_definition_instance.to_dict()
# create an instance of ExternalBillingAccountDefinition from a dict
external_billing_account_definition_from_dict = ExternalBillingAccountDefinition.from_dict(external_billing_account_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


