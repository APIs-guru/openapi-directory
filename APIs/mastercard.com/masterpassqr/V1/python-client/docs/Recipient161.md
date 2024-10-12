# Recipient161

Contains the recipient info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Recipient address | [optional] 
**name_on_account** | **str** | Recipient name | [optional] 

## Example

```python
from openapi_client.models.recipient161 import Recipient161

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient161 from a JSON string
recipient161_instance = Recipient161.from_json(json)
# print the JSON string representation of the object
print(Recipient161.to_json())

# convert the object into a dict
recipient161_dict = recipient161_instance.to_dict()
# create an instance of Recipient161 from a dict
recipient161_from_dict = Recipient161.from_dict(recipient161_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


