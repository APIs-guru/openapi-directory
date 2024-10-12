# EndUserLicenseAgreementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndUserLicenseAgreement**](EndUserLicenseAgreement.md) |  | 
**included** | [**List[Territory]**](Territory.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement_response import EndUserLicenseAgreementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementResponse from a JSON string
end_user_license_agreement_response_instance = EndUserLicenseAgreementResponse.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementResponse.to_json())

# convert the object into a dict
end_user_license_agreement_response_dict = end_user_license_agreement_response_instance.to_dict()
# create an instance of EndUserLicenseAgreementResponse from a dict
end_user_license_agreement_response_from_dict = EndUserLicenseAgreementResponse.from_dict(end_user_license_agreement_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


