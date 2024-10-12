# Nickname

A person's nickname.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the nickname. | [optional] 
**value** | **str** | The nickname. | [optional] 

## Example

```python
from openapi_client.models.nickname import Nickname

# TODO update the JSON string below
json = "{}"
# create an instance of Nickname from a JSON string
nickname_instance = Nickname.from_json(json)
# print the JSON string representation of the object
print(Nickname.to_json())

# convert the object into a dict
nickname_dict = nickname_instance.to_dict()
# create an instance of Nickname from a dict
nickname_from_dict = Nickname.from_dict(nickname_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


