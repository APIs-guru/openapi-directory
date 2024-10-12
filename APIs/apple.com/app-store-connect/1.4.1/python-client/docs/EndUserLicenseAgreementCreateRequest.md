# EndUserLicenseAgreementCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndUserLicenseAgreementCreateRequestData**](EndUserLicenseAgreementCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement_create_request import EndUserLicenseAgreementCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementCreateRequest from a JSON string
end_user_license_agreement_create_request_instance = EndUserLicenseAgreementCreateRequest.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementCreateRequest.to_json())

# convert the object into a dict
end_user_license_agreement_create_request_dict = end_user_license_agreement_create_request_instance.to_dict()
# create an instance of EndUserLicenseAgreementCreateRequest from a dict
end_user_license_agreement_create_request_from_dict = EndUserLicenseAgreementCreateRequest.from_dict(end_user_license_agreement_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


