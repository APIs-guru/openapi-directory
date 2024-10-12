# I18nRegion

A *i18nRegion* resource identifies a region where YouTube is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the i18n region. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#i18nRegion\&quot;. | [optional] [default to 'youtube#i18nRegion']
**snippet** | [**I18nRegionSnippet**](I18nRegionSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.i18n_region import I18nRegion

# TODO update the JSON string below
json = "{}"
# create an instance of I18nRegion from a JSON string
i18n_region_instance = I18nRegion.from_json(json)
# print the JSON string representation of the object
print(I18nRegion.to_json())

# convert the object into a dict
i18n_region_dict = i18n_region_instance.to_dict()
# create an instance of I18nRegion from a dict
i18n_region_from_dict = I18nRegion.from_dict(i18n_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


