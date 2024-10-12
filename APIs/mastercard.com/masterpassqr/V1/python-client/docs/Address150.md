# Address150

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
from openapi_client.models.address150 import Address150

# TODO update the JSON string below
json = "{}"
# create an instance of Address150 from a JSON string
address150_instance = Address150.from_json(json)
# print the JSON string representation of the object
print(Address150.to_json())

# convert the object into a dict
address150_dict = address150_instance.to_dict()
# create an instance of Address150 from a dict
address150_from_dict = Address150.from_dict(address150_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


