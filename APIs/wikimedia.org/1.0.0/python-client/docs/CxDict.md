# CxDict


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | the original word to look up | [optional] 
**translations** | [**List[CxDictTranslationsInner]**](CxDictTranslationsInner.md) | the translations found | [optional] 

## Example

```python
from openapi_client.models.cx_dict import CxDict

# TODO update the JSON string below
json = "{}"
# create an instance of CxDict from a JSON string
cx_dict_instance = CxDict.from_json(json)
# print the JSON string representation of the object
print(CxDict.to_json())

# convert the object into a dict
cx_dict_dict = cx_dict_instance.to_dict()
# create an instance of CxDict from a dict
cx_dict_from_dict = CxDict.from_dict(cx_dict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


