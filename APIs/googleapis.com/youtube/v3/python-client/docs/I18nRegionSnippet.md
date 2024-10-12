# I18nRegionSnippet

Basic details about an i18n region, such as region code and human-readable name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gl** | **str** | The region code as a 2-letter ISO country code. | [optional] 
**name** | **str** | The human-readable name of the region. | [optional] 

## Example

```python
from openapi_client.models.i18n_region_snippet import I18nRegionSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of I18nRegionSnippet from a JSON string
i18n_region_snippet_instance = I18nRegionSnippet.from_json(json)
# print the JSON string representation of the object
print(I18nRegionSnippet.to_json())

# convert the object into a dict
i18n_region_snippet_dict = i18n_region_snippet_instance.to_dict()
# create an instance of I18nRegionSnippet from a dict
i18n_region_snippet_from_dict = I18nRegionSnippet.from_dict(i18n_region_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


