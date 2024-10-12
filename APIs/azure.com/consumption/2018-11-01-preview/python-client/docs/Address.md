# Address

Address details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | Address Line1. | [optional] 
**address_line2** | **str** | Address Line2. | [optional] 
**address_line3** | **str** | Address Line3. | [optional] 
**city** | **str** | Address City. | [optional] 
**country** | **str** | Country code uses ISO2, 2-digit format.. | [optional] 
**phone_number** | **str** | Phone Number. | [optional] 
**postal_code** | **str** | Postal Code. | [optional] 
**region** | **str** | Address Region. | [optional] 

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


