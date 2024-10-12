# ShippingAddress


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
**instructions** | **str** | Additional text about how to handle the shipment at this address.  | [optional] 

## Example

```python
from openapi_client.models.shipping_address import ShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingAddress from a JSON string
shipping_address_instance = ShippingAddress.from_json(json)
# print the JSON string representation of the object
print(ShippingAddress.to_json())

# convert the object into a dict
shipping_address_dict = shipping_address_instance.to_dict()
# create an instance of ShippingAddress from a dict
shipping_address_from_dict = ShippingAddress.from_dict(shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


