# ATMOrganisationBrand

Brand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trademark_id** | **str** | The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted | 
**trademark_ipo_code** | **str** | The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only) | 

## Example

```python
from openapi_client.models.atm_organisation_brand import ATMOrganisationBrand

# TODO update the JSON string below
json = "{}"
# create an instance of ATMOrganisationBrand from a JSON string
atm_organisation_brand_instance = ATMOrganisationBrand.from_json(json)
# print the JSON string representation of the object
print(ATMOrganisationBrand.to_json())

# convert the object into a dict
atm_organisation_brand_dict = atm_organisation_brand_instance.to_dict()
# create an instance of ATMOrganisationBrand from a dict
atm_organisation_brand_from_dict = ATMOrganisationBrand.from_dict(atm_organisation_brand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


