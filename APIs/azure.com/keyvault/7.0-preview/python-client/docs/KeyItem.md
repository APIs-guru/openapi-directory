# KeyItem

The key item containing key metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**KeyAttributes**](KeyAttributes.md) |  | [optional] 
**kid** | **str** | Key identifier. | [optional] 
**managed** | **bool** | True if the key&#39;s lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.key_item import KeyItem

# TODO update the JSON string below
json = "{}"
# create an instance of KeyItem from a JSON string
key_item_instance = KeyItem.from_json(json)
# print the JSON string representation of the object
print(KeyItem.to_json())

# convert the object into a dict
key_item_dict = key_item_instance.to_dict()
# create an instance of KeyItem from a dict
key_item_from_dict = KeyItem.from_dict(key_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


