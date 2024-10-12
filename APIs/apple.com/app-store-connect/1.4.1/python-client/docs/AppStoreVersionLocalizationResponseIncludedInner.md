# AppStoreVersionLocalizationResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreviewSetAttributes**](AppPreviewSetAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppPreviewSetRelationships**](AppPreviewSetRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_localization_response_included_inner import AppStoreVersionLocalizationResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationResponseIncludedInner from a JSON string
app_store_version_localization_response_included_inner_instance = AppStoreVersionLocalizationResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationResponseIncludedInner.to_json())

# convert the object into a dict
app_store_version_localization_response_included_inner_dict = app_store_version_localization_response_included_inner_instance.to_dict()
# create an instance of AppStoreVersionLocalizationResponseIncludedInner from a dict
app_store_version_localization_response_included_inner_from_dict = AppStoreVersionLocalizationResponseIncludedInner.from_dict(app_store_version_localization_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


