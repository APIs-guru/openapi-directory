# BetaLicenseAgreementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaLicenseAgreement**](BetaLicenseAgreement.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_license_agreement_response import BetaLicenseAgreementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaLicenseAgreementResponse from a JSON string
beta_license_agreement_response_instance = BetaLicenseAgreementResponse.from_json(json)
# print the JSON string representation of the object
print(BetaLicenseAgreementResponse.to_json())

# convert the object into a dict
beta_license_agreement_response_dict = beta_license_agreement_response_instance.to_dict()
# create an instance of BetaLicenseAgreementResponse from a dict
beta_license_agreement_response_from_dict = BetaLicenseAgreementResponse.from_dict(beta_license_agreement_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


