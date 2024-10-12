# PrimaryAddress

The employer auto enrolments' primary address

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
from openapi_client.models.primary_address import PrimaryAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryAddress from a JSON string
primary_address_instance = PrimaryAddress.from_json(json)
# print the JSON string representation of the object
print(PrimaryAddress.to_json())

# convert the object into a dict
primary_address_dict = primary_address_instance.to_dict()
# create an instance of PrimaryAddress from a dict
primary_address_from_dict = PrimaryAddress.from_dict(primary_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


