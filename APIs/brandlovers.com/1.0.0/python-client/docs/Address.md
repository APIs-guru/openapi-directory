# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address first line (ave, street name, etc..) | 
**city** | **str** | City | 
**complement** | **str** | Complementary info (aptartament number, building name, suite) | 
**country_id** | **str** | Contry code using aplpha ISO-3166, Example: BR, US, AR, GB, CN | 
**neighbourhood** | **str** | Address neighbourhood | 
**number** | **str** | Address number | 
**recipient_name** | **str** | Recipient Name | [optional] 
**reference** | **str** | Pontos de referência | [optional] 
**state** | **str** | State | 
**zip_code** | **str** | Zip Code | 

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


