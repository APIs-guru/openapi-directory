# Address2

The sub contractors' address

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
from openapi_client.models.address2 import Address2

# TODO update the JSON string below
json = "{}"
# create an instance of Address2 from a JSON string
address2_instance = Address2.from_json(json)
# print the JSON string representation of the object
print(Address2.to_json())

# convert the object into a dict
address2_dict = address2_instance.to_dict()
# create an instance of Address2 from a dict
address2_from_dict = Address2.from_dict(address2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


