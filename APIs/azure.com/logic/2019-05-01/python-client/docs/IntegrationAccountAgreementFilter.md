# IntegrationAccountAgreementFilter

The integration account agreement filter for odata query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement_type** | [**AgreementType**](AgreementType.md) |  | 

## Example

```python
from openapi_client.models.integration_account_agreement_filter import IntegrationAccountAgreementFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountAgreementFilter from a JSON string
integration_account_agreement_filter_instance = IntegrationAccountAgreementFilter.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountAgreementFilter.to_json())

# convert the object into a dict
integration_account_agreement_filter_dict = integration_account_agreement_filter_instance.to_dict()
# create an instance of IntegrationAccountAgreementFilter from a dict
integration_account_agreement_filter_from_dict = IntegrationAccountAgreementFilter.from_dict(integration_account_agreement_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


