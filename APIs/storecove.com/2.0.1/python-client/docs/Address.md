# Address

The address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The name of the city. Mandatory in most countries. | [optional] 
**country** | [**Country**](Country.md) |  | 
**county** | **str** | An optional county name. | [optional] 
**street1** | **str** | The street name and number. Mandatory in most countries. | [optional] 
**street2** | **str** | The second street field. Use this if you used the first field for the building name. | [optional] 
**zip** | **str** | The zipcode/postalzone. Mandatory unless the country does not have zip codes. | [optional] 

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


