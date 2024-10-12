# MetaTagSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**description_category_page** | **str** |  | [optional] 
**description_collection_page** | **str** |  | [optional] 
**description_listing_page** | **str** |  | [optional] 
**keywords** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**title_postfix** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.meta_tag_settings import MetaTagSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MetaTagSettings from a JSON string
meta_tag_settings_instance = MetaTagSettings.from_json(json)
# print the JSON string representation of the object
print(MetaTagSettings.to_json())

# convert the object into a dict
meta_tag_settings_dict = meta_tag_settings_instance.to_dict()
# create an instance of MetaTagSettings from a dict
meta_tag_settings_from_dict = MetaTagSettings.from_dict(meta_tag_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


