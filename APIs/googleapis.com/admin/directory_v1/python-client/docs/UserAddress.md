# UserAddress

JSON template for address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country. | [optional] 
**country_code** | **str** | Country code. | [optional] 
**custom_type** | **str** | Custom type. | [optional] 
**extended_address** | **str** | Extended Address. | [optional] 
**formatted** | **str** | Formatted address. | [optional] 
**locality** | **str** | Locality. | [optional] 
**po_box** | **str** | Other parts of address. | [optional] 
**postal_code** | **str** | Postal code. | [optional] 
**primary** | **bool** | If this is user&#39;s primary address. Only one entry could be marked as primary. | [optional] 
**region** | **str** | Region. | [optional] 
**source_is_structured** | **bool** | User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered. | [optional] 
**street_address** | **str** | Street. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value. | [optional] 

## Example

```python
from openapi_client.models.user_address import UserAddress

# TODO update the JSON string below
json = "{}"
# create an instance of UserAddress from a JSON string
user_address_instance = UserAddress.from_json(json)
# print the JSON string representation of the object
print(UserAddress.to_json())

# convert the object into a dict
user_address_dict = user_address_instance.to_dict()
# create an instance of UserAddress from a dict
user_address_from_dict = UserAddress.from_dict(user_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


