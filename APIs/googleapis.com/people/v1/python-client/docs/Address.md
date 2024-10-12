# Address

A person's physical address. May be a P.O. box or street address. All fields are optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city of the address. | [optional] 
**country** | **str** | The country of the address. | [optional] 
**country_code** | **str** | The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country code of the address. | [optional] 
**extended_address** | **str** | The extended address of the address; for example, the apartment number. | [optional] 
**formatted_type** | **str** | Output only. The type of the address translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**formatted_value** | **str** | The unstructured value of the address. If this is not set by the user it will be automatically constructed from structured values. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**po_box** | **str** | The P.O. box of the address. | [optional] 
**postal_code** | **str** | The postal code of the address. | [optional] 
**region** | **str** | The region of the address; for example, the state or province. | [optional] 
**street_address** | **str** | The street address. | [optional] 
**type** | **str** | The type of the address. The type can be custom or one of these predefined values: * &#x60;home&#x60; * &#x60;work&#x60; * &#x60;other&#x60; | [optional] 

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


