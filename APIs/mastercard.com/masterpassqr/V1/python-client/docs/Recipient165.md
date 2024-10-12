# Recipient165

Contains the recipient info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Recipient address | [optional] 
**name_on_account** | **str** | Recipient name | [optional] 

## Example

```python
from openapi_client.models.recipient165 import Recipient165

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient165 from a JSON string
recipient165_instance = Recipient165.from_json(json)
# print the JSON string representation of the object
print(Recipient165.to_json())

# convert the object into a dict
recipient165_dict = recipient165_instance.to_dict()
# create an instance of Recipient165 from a dict
recipient165_from_dict = Recipient165.from_dict(recipient165_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


