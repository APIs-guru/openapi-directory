# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | alphanumeric (64) | [optional] 
**address_line2** | **str** | alphanumeric (64) | [optional] 
**city** | **str** | alphanumeric (32) | [optional] 
**country** | **str** | characters (2) | [optional] 
**email_address** | **str** | alphanumeric (32) | [optional] 
**name** | **str** | alphanumeric (64) | [optional] 
**phone_number** | **str** | alphanumeric (32) | [optional] 
**postal_code** | **str** | alphanumeric (16) | [optional] 
**province** | **str** | characters (2) | [optional] 

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


