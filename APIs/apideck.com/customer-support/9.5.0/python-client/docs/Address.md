# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | Name of city. | [optional] 
**contact_name** | **str** |  | [optional] 
**country** | **str** | country code according to ISO 3166-1 alpha-2. | [optional] 
**county** | **str** | Address field that holds a sublocality, such as a county | [optional] 
**email** | **str** |  | [optional] 
**fax** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**latitude** | **str** |  | [optional] 
**line1** | **str** | Line 1 of the address e.g. number, street, suite, apt #, etc. | [optional] 
**line2** | **str** | Line 2 of the address | [optional] 
**line3** | **str** | Line 3 of the address | [optional] 
**line4** | **str** | Line 4 of the address | [optional] 
**longitude** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**postal_code** | **str** | Zip code or equivalent. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**salutation** | **str** |  | [optional] 
**state** | **str** | Name of state | [optional] 
**street_number** | **str** | Street number | [optional] 
**string** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

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


