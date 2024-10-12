# IntegrationAccountListResult

The list of integration accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[IntegrationAccount]**](IntegrationAccount.md) | The list of integration accounts. | [optional] 

## Example

```python
from openapi_client.models.integration_account_list_result import IntegrationAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountListResult from a JSON string
integration_account_list_result_instance = IntegrationAccountListResult.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountListResult.to_json())

# convert the object into a dict
integration_account_list_result_dict = integration_account_list_result_instance.to_dict()
# create an instance of IntegrationAccountListResult from a dict
integration_account_list_result_from_dict = IntegrationAccountListResult.from_dict(integration_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


