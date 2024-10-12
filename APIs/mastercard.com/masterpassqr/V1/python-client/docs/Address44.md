# Address44

Address of the recipient/merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the recipient/merchant. | [optional] 
**country** | **str** | Country of the recipient as an ISO alpha country code. | [optional] 
**country_subdivision** | **str** | State or province of the recipient/merchant. | [optional] 
**line1** | **str** | First line of the address of the recipient/merchant. | [optional] 
**line2** | **str** | Second line of the address of the recipient/merchant. | [optional] 
**postal_code** | **str** | Postal code of the recipient/merchant. | [optional] 

## Example

```python
from openapi_client.models.address44 import Address44

# TODO update the JSON string below
json = "{}"
# create an instance of Address44 from a JSON string
address44_instance = Address44.from_json(json)
# print the JSON string representation of the object
print(Address44.to_json())

# convert the object into a dict
address44_dict = address44_instance.to_dict()
# create an instance of Address44 from a dict
address44_from_dict = Address44.from_dict(address44_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


