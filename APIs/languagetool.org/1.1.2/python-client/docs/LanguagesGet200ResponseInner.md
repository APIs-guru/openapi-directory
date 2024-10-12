# LanguagesGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | a language code like &#39;en&#39; | 
**long_code** | **str** | a language code like &#39;en-US&#39; or &#39;ca-ES-valencia&#39; | 
**name** | **str** | a language name like &#39;French&#39; or &#39;English (Australia)&#39; | 

## Example

```python
from openapi_client.models.languages_get200_response_inner import LanguagesGet200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of LanguagesGet200ResponseInner from a JSON string
languages_get200_response_inner_instance = LanguagesGet200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(LanguagesGet200ResponseInner.to_json())

# convert the object into a dict
languages_get200_response_inner_dict = languages_get200_response_inner_instance.to_dict()
# create an instance of LanguagesGet200ResponseInner from a dict
languages_get200_response_inner_from_dict = LanguagesGet200ResponseInner.from_dict(languages_get200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


