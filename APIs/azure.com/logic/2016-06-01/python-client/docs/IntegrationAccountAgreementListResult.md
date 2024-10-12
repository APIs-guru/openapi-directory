# IntegrationAccountAgreementListResult

The list of integration account agreements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[IntegrationAccountAgreement]**](IntegrationAccountAgreement.md) | The list of integration account agreements. | [optional] 

## Example

```python
from openapi_client.models.integration_account_agreement_list_result import IntegrationAccountAgreementListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountAgreementListResult from a JSON string
integration_account_agreement_list_result_instance = IntegrationAccountAgreementListResult.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountAgreementListResult.to_json())

# convert the object into a dict
integration_account_agreement_list_result_dict = integration_account_agreement_list_result_instance.to_dict()
# create an instance of IntegrationAccountAgreementListResult from a dict
integration_account_agreement_list_result_from_dict = IntegrationAccountAgreementListResult.from_dict(integration_account_agreement_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


