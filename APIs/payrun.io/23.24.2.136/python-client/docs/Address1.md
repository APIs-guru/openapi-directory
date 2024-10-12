# Address1

The employers' address

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
from openapi_client.models.address1 import Address1

# TODO update the JSON string below
json = "{}"
# create an instance of Address1 from a JSON string
address1_instance = Address1.from_json(json)
# print the JSON string representation of the object
print(Address1.to_json())

# convert the object into a dict
address1_dict = address1_instance.to_dict()
# create an instance of Address1 from a dict
address1_from_dict = Address1.from_dict(address1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


