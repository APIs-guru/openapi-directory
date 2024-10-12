# CustomEmoji

Represents a custom emoji.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **str** | Unique key for the custom emoji resource. | [optional] 

## Example

```python
from openapi_client.models.custom_emoji import CustomEmoji

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEmoji from a JSON string
custom_emoji_instance = CustomEmoji.from_json(json)
# print the JSON string representation of the object
print(CustomEmoji.to_json())

# convert the object into a dict
custom_emoji_dict = custom_emoji_instance.to_dict()
# create an instance of CustomEmoji from a dict
custom_emoji_from_dict = CustomEmoji.from_dict(custom_emoji_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


