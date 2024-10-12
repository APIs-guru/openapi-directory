# CxDictTranslationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | **str** | extra information about the phrase | [optional] 
**phrase** | **str** | the translated phrase | [optional] 
**sources** | **str** | the source dictionary used for the translation | [optional] 

## Example

```python
from openapi_client.models.cx_dict_translations_inner import CxDictTranslationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CxDictTranslationsInner from a JSON string
cx_dict_translations_inner_instance = CxDictTranslationsInner.from_json(json)
# print the JSON string representation of the object
print(CxDictTranslationsInner.to_json())

# convert the object into a dict
cx_dict_translations_inner_dict = cx_dict_translations_inner_instance.to_dict()
# create an instance of CxDictTranslationsInner from a dict
cx_dict_translations_inner_from_dict = CxDictTranslationsInner.from_dict(cx_dict_translations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


