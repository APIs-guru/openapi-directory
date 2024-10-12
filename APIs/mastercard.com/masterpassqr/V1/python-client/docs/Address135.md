# Address135

 Address of the recipient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the recipient | [optional] 
**country** | **str** | Country of the recipient as an ISO alpha country code. | [optional] 
**country_subdivision** | **str** | State or province of the recipient. | [optional] 
**line1** | **str** | First line of the address of the recipient. | [optional] 
**line2** | **str** | Second line of the address of the recipient. | [optional] 
**postal_code** | **str** | Postal code of the recipient. | [optional] 

## Example

```python
from openapi_client.models.address135 import Address135

# TODO update the JSON string below
json = "{}"
# create an instance of Address135 from a JSON string
address135_instance = Address135.from_json(json)
# print the JSON string representation of the object
print(Address135.to_json())

# convert the object into a dict
address135_dict = address135_instance.to_dict()
# create an instance of Address135 from a dict
address135_from_dict = Address135.from_dict(address135_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


