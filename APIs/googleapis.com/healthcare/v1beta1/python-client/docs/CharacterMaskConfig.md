# CharacterMaskConfig

Mask a string by replacing its characters with a fixed character.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**masking_character** | **str** | Character to mask the sensitive values. If not supplied, defaults to \&quot;*\&quot;. | [optional] 

## Example

```python
from openapi_client.models.character_mask_config import CharacterMaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CharacterMaskConfig from a JSON string
character_mask_config_instance = CharacterMaskConfig.from_json(json)
# print the JSON string representation of the object
print(CharacterMaskConfig.to_json())

# convert the object into a dict
character_mask_config_dict = character_mask_config_instance.to_dict()
# create an instance of CharacterMaskConfig from a dict
character_mask_config_from_dict = CharacterMaskConfig.from_dict(character_mask_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


