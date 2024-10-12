# Address147

Address of the sender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the sender. | [optional] 
**country** | **str** | Country of the sender as an ISO alpha country code. | [optional] 
**country_subdivision** | **str** | State or province of the sender. | [optional] 
**line1** | **str** | First line of the address of the sender. | [optional] 
**line2** | **str** | Second line of the address of the sender. | [optional] 
**postal_code** | **str** | Postal code of the sender. | [optional] 

## Example

```python
from openapi_client.models.address147 import Address147

# TODO update the JSON string below
json = "{}"
# create an instance of Address147 from a JSON string
address147_instance = Address147.from_json(json)
# print the JSON string representation of the object
print(Address147.to_json())

# convert the object into a dict
address147_dict = address147_instance.to_dict()
# create an instance of Address147 from a dict
address147_from_dict = Address147.from_dict(address147_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


