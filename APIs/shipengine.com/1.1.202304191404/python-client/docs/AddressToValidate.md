# AddressToValidate

Any residential or business mailing address, anywhere in the world. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.  | 
**address_line2** | **str** | The second line of the street address.  For some addresses, this line may not be needed.  | [optional] 
**address_line3** | **str** | The third line of the street address.  For some addresses, this line may not be needed.  | [optional] 
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) | Indicates whether this is a residential address. | [optional] 
**city_locality** | **str** | The name of the city or locality | 
**company_name** | **str** | If this is a business address, then the company name should be specified here.  | [optional] 
**country_code** | **str** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | 
**email** | **str** | Email for the address owner.  | [optional] 
**name** | **str** | The name of a contact person at this address.  This field may be set instead of - or in addition to - the &#x60;company_name&#x60; field.  | [optional] 
**phone** | **str** | The phone number of a contact person at this address.  The format of this phone number varies depending on the country.  | [optional] 
**postal_code** | **str** | postal code | [optional] 
**state_province** | **str** | The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.  | 

## Example

```python
from openapi_client.models.address_to_validate import AddressToValidate

# TODO update the JSON string below
json = "{}"
# create an instance of AddressToValidate from a JSON string
address_to_validate_instance = AddressToValidate.from_json(json)
# print the JSON string representation of the object
print(AddressToValidate.to_json())

# convert the object into a dict
address_to_validate_dict = address_to_validate_instance.to_dict()
# create an instance of AddressToValidate from a dict
address_to_validate_from_dict = AddressToValidate.from_dict(address_to_validate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


