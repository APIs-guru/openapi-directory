# I18nLanguageListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[I18nLanguage]**](I18nLanguage.md) | A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#i18nLanguageListResponse\&quot;. | [optional] [default to 'youtube#i18nLanguageListResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.i18n_language_list_response import I18nLanguageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of I18nLanguageListResponse from a JSON string
i18n_language_list_response_instance = I18nLanguageListResponse.from_json(json)
# print the JSON string representation of the object
print(I18nLanguageListResponse.to_json())

# convert the object into a dict
i18n_language_list_response_dict = i18n_language_list_response_instance.to_dict()
# create an instance of I18nLanguageListResponse from a dict
i18n_language_list_response_from_dict = I18nLanguageListResponse.from_dict(i18n_language_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


