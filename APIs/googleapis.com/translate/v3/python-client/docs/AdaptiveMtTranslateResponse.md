# AdaptiveMtTranslateResponse

An AdaptiveMtTranslate response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Output only. The translation&#39;s language code. | [optional] [readonly] 
**translations** | [**List[AdaptiveMtTranslation]**](AdaptiveMtTranslation.md) | Output only. The translation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adaptive_mt_translate_response import AdaptiveMtTranslateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveMtTranslateResponse from a JSON string
adaptive_mt_translate_response_instance = AdaptiveMtTranslateResponse.from_json(json)
# print the JSON string representation of the object
print(AdaptiveMtTranslateResponse.to_json())

# convert the object into a dict
adaptive_mt_translate_response_dict = adaptive_mt_translate_response_instance.to_dict()
# create an instance of AdaptiveMtTranslateResponse from a dict
adaptive_mt_translate_response_from_dict = AdaptiveMtTranslateResponse.from_dict(adaptive_mt_translate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


