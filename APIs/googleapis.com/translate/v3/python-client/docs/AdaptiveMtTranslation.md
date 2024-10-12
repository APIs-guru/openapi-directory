# AdaptiveMtTranslation

An AdaptiveMt translation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**translated_text** | **str** | Output only. The translated text. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adaptive_mt_translation import AdaptiveMtTranslation

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveMtTranslation from a JSON string
adaptive_mt_translation_instance = AdaptiveMtTranslation.from_json(json)
# print the JSON string representation of the object
print(AdaptiveMtTranslation.to_json())

# convert the object into a dict
adaptive_mt_translation_dict = adaptive_mt_translation_instance.to_dict()
# create an instance of AdaptiveMtTranslation from a dict
adaptive_mt_translation_from_dict = AdaptiveMtTranslation.from_dict(adaptive_mt_translation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


