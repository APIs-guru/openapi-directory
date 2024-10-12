# EndUserLicenseAgreementRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**territories** | [**AppRelationshipsAvailableTerritories**](AppRelationshipsAvailableTerritories.md) |  | [optional] 

## Example

```python
from openapi_client.models.end_user_license_agreement_relationships import EndUserLicenseAgreementRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementRelationships from a JSON string
end_user_license_agreement_relationships_instance = EndUserLicenseAgreementRelationships.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementRelationships.to_json())

# convert the object into a dict
end_user_license_agreement_relationships_dict = end_user_license_agreement_relationships_instance.to_dict()
# create an instance of EndUserLicenseAgreementRelationships from a dict
end_user_license_agreement_relationships_from_dict = EndUserLicenseAgreementRelationships.from_dict(end_user_license_agreement_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


