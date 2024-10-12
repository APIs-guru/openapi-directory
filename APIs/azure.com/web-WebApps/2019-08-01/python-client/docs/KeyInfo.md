# KeyInfo

Function key info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Key name | [optional] 
**value** | **str** | Key value | [optional] 

## Example

```python
from openapi_client.models.key_info import KeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of KeyInfo from a JSON string
key_info_instance = KeyInfo.from_json(json)
# print the JSON string representation of the object
print(KeyInfo.to_json())

# convert the object into a dict
key_info_dict = key_info_instance.to_dict()
# create an instance of KeyInfo from a dict
key_info_from_dict = KeyInfo.from_dict(key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


