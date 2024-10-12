# BetaLicenseAgreementsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaLicenseAgreement]**](BetaLicenseAgreement.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_license_agreements_response import BetaLicenseAgreementsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaLicenseAgreementsResponse from a JSON string
beta_license_agreements_response_instance = BetaLicenseAgreementsResponse.from_json(json)
# print the JSON string representation of the object
print(BetaLicenseAgreementsResponse.to_json())

# convert the object into a dict
beta_license_agreements_response_dict = beta_license_agreements_response_instance.to_dict()
# create an instance of BetaLicenseAgreementsResponse from a dict
beta_license_agreements_response_from_dict = BetaLicenseAgreementsResponse.from_dict(beta_license_agreements_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


