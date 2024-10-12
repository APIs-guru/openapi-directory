# EndUserLicenseAgreementCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**EndUserLicenseAgreementCreateRequestDataAttributes**](EndUserLicenseAgreementCreateRequestDataAttributes.md) |  | 
**relationships** | [**EndUserLicenseAgreementCreateRequestDataRelationships**](EndUserLicenseAgreementCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement_create_request_data import EndUserLicenseAgreementCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementCreateRequestData from a JSON string
end_user_license_agreement_create_request_data_instance = EndUserLicenseAgreementCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementCreateRequestData.to_json())

# convert the object into a dict
end_user_license_agreement_create_request_data_dict = end_user_license_agreement_create_request_data_instance.to_dict()
# create an instance of EndUserLicenseAgreementCreateRequestData from a dict
end_user_license_agreement_create_request_data_from_dict = EndUserLicenseAgreementCreateRequestData.from_dict(end_user_license_agreement_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


