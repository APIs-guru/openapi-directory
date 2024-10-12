# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | Name of city. | [optional] 
**contact_name** | **str** | Name of the contact person at the address | [optional] 
**country** | **str** | country code according to ISO 3166-1 alpha-2. | [optional] 
**county** | **str** | Address field that holds a sublocality, such as a county | [optional] 
**email** | **str** | Email address of the address | [optional] 
**fax** | **str** | Fax number of the address | [optional] 
**id** | **str** | Unique identifier for the address. | [optional] 
**latitude** | **str** | Latitude of the address | [optional] 
**line1** | **str** | Line 1 of the address e.g. number, street, suite, apt #, etc. | [optional] 
**line2** | **str** | Line 2 of the address | [optional] 
**line3** | **str** | Line 3 of the address | [optional] 
**line4** | **str** | Line 4 of the address | [optional] 
**longitude** | **str** | Longitude of the address | [optional] 
**name** | **str** | The name of the address. | [optional] 
**notes** | **str** | Additional notes | [optional] 
**phone_number** | **str** | Phone number of the address | [optional] 
**postal_code** | **str** | Zip code or equivalent. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**salutation** | **str** | Salutation of the contact person at the address | [optional] 
**state** | **str** | Name of state | [optional] 
**street_number** | **str** | Street number | [optional] 
**string** | **str** | The address string. Some APIs don&#39;t provide structured address data. | [optional] 
**type** | **str** | The type of address. | [optional] 
**website** | **str** | Website of the address | [optional] 

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


