# AddressObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_id** | **str** | As addresses are added to an entity, they&#39;re assigned an id to assist with tracking.   If you&#39;re adjusting an address, you will need to include the addressId so as to be able to reference it correctly in the list.  | [optional] 
**address_type** | [**EnumAddressType**](EnumAddressType.md) |  | [optional] 
**building_name** | **str** | The name of the building, apartment block, condo, etc | [optional] 
**care_of** | **str** | Individual or business name at this address if not the same as the name of the entity to which this address belongs.  | [optional] 
**country** | **str** | The ISO-3166-1 country. You must use the alpha3 country code (e.g. AUS, USA, IDR, KOR, etc) We&#39;ll convert as needed.   See: https://en.wikipedia.org/wiki/ISO_3166-1  | 
**end_date** | **date** | The date this address was no longer used (if available). Used mostly with business addresses.  | [optional] 
**long_form** | **str** | In some cases, the address will need to be supplied in \&quot;long form\&quot;, such as when it is determined from a document scan, or is un-parsable in some way. The service will attempt to convert it to it&#39;s constituent parts where possible.  WARNING: Use of longForm is not guaranteed to produce perfect results, due to the variety of potential formats. You&#39;ve been warned.  Failure to break down or disambiguate the address will result in an error.  | [optional] 
**postal_code** | **str** | The post code of the address. | [optional] 
**region** | **str** | The county, province, cantonment | [optional] 
**start_date** | **date** | The date this address first because active. Used mostly with business addresses.  | [optional] 
**state** | **str** | The state. Use local abbreviations, such as VIC(toria) or TX (Texas) | [optional] 
**street_name** | **str** | The name of the street  This field can in fact be a bit flexible, potentially containing the streetNumber and streetType as well. Most services in use can work it out.  If this field has been auto-populated by Google (see writeup here:  https://apidocs.frankiefinancial.com/docs/working-with-addresses then the bulk of the address will be in this field.  If you can avoid it though, please try and keep things separate.  | [optional] 
**street_number** | **str** | The number on the street. Generally a number, but can also be alphanumeric (e.g. 3A)  | [optional] 
**street_type** | **str** | The street \&quot;type\&quot; - e.g. Road, St, Ave, Circuit, etc | [optional] 
**suburb** | **str** | The suburb in the town/city. Only use this if you require a suburb AND a town/city, otherwise, just use the \&quot;town\&quot; parameter. | [optional] 
**town** | **str** | The town/village/suburb/city | [optional] 
**unit_number** | **str** | Unit/Apartment/Flat/Suite/etc number | [optional] 

## Example

```python
from openapi_client.models.address_object import AddressObject

# TODO update the JSON string below
json = "{}"
# create an instance of AddressObject from a JSON string
address_object_instance = AddressObject.from_json(json)
# print the JSON string representation of the object
print(AddressObject.to_json())

# convert the object into a dict
address_object_dict = address_object_instance.to_dict()
# create an instance of AddressObject from a dict
address_object_from_dict = AddressObject.from_dict(address_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


