# EndUserLicenseAgreement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaLicenseAgreementAttributes**](BetaLicenseAgreementAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**EndUserLicenseAgreementRelationships**](EndUserLicenseAgreementRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement import EndUserLicenseAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreement from a JSON string
end_user_license_agreement_instance = EndUserLicenseAgreement.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreement.to_json())

# convert the object into a dict
end_user_license_agreement_dict = end_user_license_agreement_instance.to_dict()
# create an instance of EndUserLicenseAgreement from a dict
end_user_license_agreement_from_dict = EndUserLicenseAgreement.from_dict(end_user_license_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


