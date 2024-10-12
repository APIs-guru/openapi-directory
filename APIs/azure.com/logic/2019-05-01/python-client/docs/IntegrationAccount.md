# IntegrationAccount

The integration account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationAccountProperties**](IntegrationAccountProperties.md) |  | [optional] 
**sku** | [**IntegrationAccountSku**](IntegrationAccountSku.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_account import IntegrationAccount

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccount from a JSON string
integration_account_instance = IntegrationAccount.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccount.to_json())

# convert the object into a dict
integration_account_dict = integration_account_instance.to_dict()
# create an instance of IntegrationAccount from a dict
integration_account_from_dict = IntegrationAccount.from_dict(integration_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


