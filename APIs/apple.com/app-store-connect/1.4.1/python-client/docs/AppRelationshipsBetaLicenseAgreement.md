# AppRelationshipsBetaLicenseAgreement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsBetaLicenseAgreementData**](AppRelationshipsBetaLicenseAgreementData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_beta_license_agreement import AppRelationshipsBetaLicenseAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsBetaLicenseAgreement from a JSON string
app_relationships_beta_license_agreement_instance = AppRelationshipsBetaLicenseAgreement.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsBetaLicenseAgreement.to_json())

# convert the object into a dict
app_relationships_beta_license_agreement_dict = app_relationships_beta_license_agreement_instance.to_dict()
# create an instance of AppRelationshipsBetaLicenseAgreement from a dict
app_relationships_beta_license_agreement_from_dict = AppRelationshipsBetaLicenseAgreement.from_dict(app_relationships_beta_license_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


