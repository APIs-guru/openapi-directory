# BetaLicenseAgreement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaLicenseAgreementAttributes**](BetaLicenseAgreementAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppEncryptionDeclarationRelationships**](AppEncryptionDeclarationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_license_agreement import BetaLicenseAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of BetaLicenseAgreement from a JSON string
beta_license_agreement_instance = BetaLicenseAgreement.from_json(json)
# print the JSON string representation of the object
print(BetaLicenseAgreement.to_json())

# convert the object into a dict
beta_license_agreement_dict = beta_license_agreement_instance.to_dict()
# create an instance of BetaLicenseAgreement from a dict
beta_license_agreement_from_dict = BetaLicenseAgreement.from_dict(beta_license_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


