# Address76

Address of the recipient/merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the recipient/merchant. | [optional] 
**country** | **str** | Country of the recipient/merchant as an ISO alpha country code. | [optional] 
**country_subdivision** | **str** | State or province of the recipient/merchant. | [optional] 
**line1** | **str** | First line of the address of the recipient/merchant. | [optional] 
**line2** | **str** | Second line of the address of the recipient/merchant. | [optional] 
**postal_code** | **str** | Postal code of the recipient/merchant. | [optional] 

## Example

```python
from openapi_client.models.address76 import Address76

# TODO update the JSON string below
json = "{}"
# create an instance of Address76 from a JSON string
address76_instance = Address76.from_json(json)
# print the JSON string representation of the object
print(Address76.to_json())

# convert the object into a dict
address76_dict = address76_instance.to_dict()
# create an instance of Address76 from a dict
address76_from_dict = Address76.from_dict(address76_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


