# Address

Any residential or business mailing address, anywhere in the world.  > **Note:** Either `name` or `company_name` must be set. Both may be specified, if relevant. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.  | 
**address_line2** | **str** | The second line of the street address.  For some addresses, this line may not be needed.  | [optional] 
**address_line3** | **str** | The third line of the street address.  For some addresses, this line may not be needed.  | [optional] 
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) | Indicates whether this is a residential address. | 
**city_locality** | **str** | The name of the city or locality | 
**company_name** | **str** | If this is a business address, then the company name should be specified here.  | [optional] 
**country_code** | **str** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | 
**email** | **str** | Email for the address owner.  | [optional] 
**name** | **str** | The name of a contact person at this address.  This field may be set instead of - or in addition to - the &#x60;company_name&#x60; field.  | 
**phone** | **str** | The phone number of a contact person at this address.  The format of this phone number varies depending on the country.  | 
**postal_code** | **str** | postal code | 
**state_province** | **str** | The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.  | 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


