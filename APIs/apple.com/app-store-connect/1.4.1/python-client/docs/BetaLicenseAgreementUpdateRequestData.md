# BetaLicenseAgreementUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaLicenseAgreementAttributes**](BetaLicenseAgreementAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_license_agreement_update_request_data import BetaLicenseAgreementUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaLicenseAgreementUpdateRequestData from a JSON string
beta_license_agreement_update_request_data_instance = BetaLicenseAgreementUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaLicenseAgreementUpdateRequestData.to_json())

# convert the object into a dict
beta_license_agreement_update_request_data_dict = beta_license_agreement_update_request_data_instance.to_dict()
# create an instance of BetaLicenseAgreementUpdateRequestData from a dict
beta_license_agreement_update_request_data_from_dict = BetaLicenseAgreementUpdateRequestData.from_dict(beta_license_agreement_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


