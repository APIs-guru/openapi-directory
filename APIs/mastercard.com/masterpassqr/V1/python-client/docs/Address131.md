# Address131

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
from openapi_client.models.address131 import Address131

# TODO update the JSON string below
json = "{}"
# create an instance of Address131 from a JSON string
address131_instance = Address131.from_json(json)
# print the JSON string representation of the object
print(Address131.to_json())

# convert the object into a dict
address131_dict = address131_instance.to_dict()
# create an instance of Address131 from a dict
address131_from_dict = Address131.from_dict(address131_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


