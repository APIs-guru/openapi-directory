# ATMOrganisationParentOrganisation

Parent organisation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bic** | **str** | The BIC from the organisation | [optional] 
**lei** | **str** | The LEI ID of the organisation | [optional] 
**organisation_name** | [**ATMOrganisationParentOrganisationOrganisationName**](ATMOrganisationParentOrganisationOrganisationName.md) |  | 

## Example

```python
from openapi_client.models.atm_organisation_parent_organisation import ATMOrganisationParentOrganisation

# TODO update the JSON string below
json = "{}"
# create an instance of ATMOrganisationParentOrganisation from a JSON string
atm_organisation_parent_organisation_instance = ATMOrganisationParentOrganisation.from_json(json)
# print the JSON string representation of the object
print(ATMOrganisationParentOrganisation.to_json())

# convert the object into a dict
atm_organisation_parent_organisation_dict = atm_organisation_parent_organisation_instance.to_dict()
# create an instance of ATMOrganisationParentOrganisation from a dict
atm_organisation_parent_organisation_from_dict = ATMOrganisationParentOrganisation.from_dict(atm_organisation_parent_organisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


