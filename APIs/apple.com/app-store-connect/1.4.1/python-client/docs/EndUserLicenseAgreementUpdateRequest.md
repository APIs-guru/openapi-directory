# EndUserLicenseAgreementUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndUserLicenseAgreementUpdateRequestData**](EndUserLicenseAgreementUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement_update_request import EndUserLicenseAgreementUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementUpdateRequest from a JSON string
end_user_license_agreement_update_request_instance = EndUserLicenseAgreementUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementUpdateRequest.to_json())

# convert the object into a dict
end_user_license_agreement_update_request_dict = end_user_license_agreement_update_request_instance.to_dict()
# create an instance of EndUserLicenseAgreementUpdateRequest from a dict
end_user_license_agreement_update_request_from_dict = EndUserLicenseAgreementUpdateRequest.from_dict(end_user_license_agreement_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


