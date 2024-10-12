# Key

Automation key which is used to register a DSC Node

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Automation key name. | [optional] [readonly] 
**permissions** | **str** | Automation key permissions. | [optional] [readonly] 
**value** | **str** | Value of the Automation Key used for registration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key import Key

# TODO update the JSON string below
json = "{}"
# create an instance of Key from a JSON string
key_instance = Key.from_json(json)
# print the JSON string representation of the object
print(Key.to_json())

# convert the object into a dict
key_dict = key_instance.to_dict()
# create an instance of Key from a dict
key_from_dict = Key.from_dict(key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


