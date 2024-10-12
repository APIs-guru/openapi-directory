# SecondaryAddress

The employer auto enrolments' secondary address

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
from openapi_client.models.secondary_address import SecondaryAddress

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryAddress from a JSON string
secondary_address_instance = SecondaryAddress.from_json(json)
# print the JSON string representation of the object
print(SecondaryAddress.to_json())

# convert the object into a dict
secondary_address_dict = secondary_address_instance.to_dict()
# create an instance of SecondaryAddress from a dict
secondary_address_from_dict = SecondaryAddress.from_dict(secondary_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


