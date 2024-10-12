# ATMOrganisation

Organisation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**ATMOrganisationBrand**](ATMOrganisationBrand.md) |  | 
**parent_organisation** | [**ATMOrganisationParentOrganisation**](ATMOrganisationParentOrganisation.md) |  | 

## Example

```python
from openapi_client.models.atm_organisation import ATMOrganisation

# TODO update the JSON string below
json = "{}"
# create an instance of ATMOrganisation from a JSON string
atm_organisation_instance = ATMOrganisation.from_json(json)
# print the JSON string representation of the object
print(ATMOrganisation.to_json())

# convert the object into a dict
atm_organisation_dict = atm_organisation_instance.to_dict()
# create an instance of ATMOrganisation from a dict
atm_organisation_from_dict = ATMOrganisation.from_dict(atm_organisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


