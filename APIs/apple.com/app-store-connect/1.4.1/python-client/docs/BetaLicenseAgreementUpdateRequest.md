# BetaLicenseAgreementUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaLicenseAgreementUpdateRequestData**](BetaLicenseAgreementUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_license_agreement_update_request import BetaLicenseAgreementUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaLicenseAgreementUpdateRequest from a JSON string
beta_license_agreement_update_request_instance = BetaLicenseAgreementUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaLicenseAgreementUpdateRequest.to_json())

# convert the object into a dict
beta_license_agreement_update_request_dict = beta_license_agreement_update_request_instance.to_dict()
# create an instance of BetaLicenseAgreementUpdateRequest from a dict
beta_license_agreement_update_request_from_dict = BetaLicenseAgreementUpdateRequest.from_dict(beta_license_agreement_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


