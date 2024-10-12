# IntegrationAccountAgreementProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement_type** | [**AgreementType**](AgreementType.md) |  | [optional] 
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**content** | [**AgreementContent**](AgreementContent.md) |  | [optional] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 
**guest_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | [optional] 
**guest_partner** | **str** | The guest partner. | [optional] 
**host_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | [optional] 
**host_partner** | **str** | The host partner. | [optional] 
**metadata** | **object** | The metadata. | [optional] 

## Example

```python
from openapi_client.models.integration_account_agreement_properties import IntegrationAccountAgreementProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountAgreementProperties from a JSON string
integration_account_agreement_properties_instance = IntegrationAccountAgreementProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountAgreementProperties.to_json())

# convert the object into a dict
integration_account_agreement_properties_dict = integration_account_agreement_properties_instance.to_dict()
# create an instance of IntegrationAccountAgreementProperties from a dict
integration_account_agreement_properties_from_dict = IntegrationAccountAgreementProperties.from_dict(integration_account_agreement_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


