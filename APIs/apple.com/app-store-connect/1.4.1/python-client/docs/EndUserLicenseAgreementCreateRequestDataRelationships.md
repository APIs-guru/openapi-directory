# EndUserLicenseAgreementCreateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppPreOrderCreateRequestDataRelationshipsApp**](AppPreOrderCreateRequestDataRelationshipsApp.md) |  | 
**territories** | [**EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories**](EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories.md) |  | 

## Example

```python
from openapi_client.models.end_user_license_agreement_create_request_data_relationships import EndUserLicenseAgreementCreateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserLicenseAgreementCreateRequestDataRelationships from a JSON string
end_user_license_agreement_create_request_data_relationships_instance = EndUserLicenseAgreementCreateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(EndUserLicenseAgreementCreateRequestDataRelationships.to_json())

# convert the object into a dict
end_user_license_agreement_create_request_data_relationships_dict = end_user_license_agreement_create_request_data_relationships_instance.to_dict()
# create an instance of EndUserLicenseAgreementCreateRequestDataRelationships from a dict
end_user_license_agreement_create_request_data_relationships_from_dict = EndUserLicenseAgreementCreateRequestDataRelationships.from_dict(end_user_license_agreement_create_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


