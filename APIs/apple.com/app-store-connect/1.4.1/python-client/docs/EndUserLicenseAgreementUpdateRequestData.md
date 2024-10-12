# EndUserLicenseAgreementUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaLicenseAgreementAttributes**](BetaLicenseAgreementAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**EndUserLicenseAgreementUpdateRequestDataRelationships**](EndUserLicenseAgreementUpdateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement_update_request_data import EndUserLicenseAgreementUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementUpdateRequestData from a JSON string
end_user_license_agreement_update_request_data_instance = EndUserLicenseAgreementUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementUpdateRequestData.to_json())

# convert the object into a dict
end_user_license_agreement_update_request_data_dict = end_user_license_agreement_update_request_data_instance.to_dict()
# create an instance of EndUserLicenseAgreementUpdateRequestData from a dict
end_user_license_agreement_update_request_data_from_dict = EndUserLicenseAgreementUpdateRequestData.from_dict(end_user_license_agreement_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


