# Address

The employees' address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **str** | The addresss&#39; line 1 | [optional] 
**address2** | **str** | The addresss&#39; line 2 | [optional] 
**address3** | **str** | The addresss&#39; line 3 | [optional] 
**address4** | **str** | The addresss&#39; line 4 | [optional] 
**country** | **str** | The addresss&#39; country | [optional] 
**postcode** | **str** | The addresss&#39; postcode | [optional] 

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


