# Address

Address information for domain registration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **str** | First line of an Address. | 
**address2** | **str** | The second line of the Address. Optional. | [optional] 
**city** | **str** | The city for the address. | 
**country** | **str** | The country for the address. | 
**postal_code** | **str** | The postal code for the address. | 
**state** | **str** | The state or province for the address. | 

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


