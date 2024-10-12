# AppStoreVersionLocalizationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppStoreVersionLocalization]**](AppStoreVersionLocalization.md) |  | 
**included** | [**List[AppStoreVersionLocalizationResponseIncludedInner]**](AppStoreVersionLocalizationResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_localizations_response import AppStoreVersionLocalizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationsResponse from a JSON string
app_store_version_localizations_response_instance = AppStoreVersionLocalizationsResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationsResponse.to_json())

# convert the object into a dict
app_store_version_localizations_response_dict = app_store_version_localizations_response_instance.to_dict()
# create an instance of AppStoreVersionLocalizationsResponse from a dict
app_store_version_localizations_response_from_dict = AppStoreVersionLocalizationsResponse.from_dict(app_store_version_localizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


