# AppStoreVersionLocalizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionLocalization**](AppStoreVersionLocalization.md) |  | 
**included** | [**List[AppStoreVersionLocalizationResponseIncludedInner]**](AppStoreVersionLocalizationResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_localization_response import AppStoreVersionLocalizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationResponse from a JSON string
app_store_version_localization_response_instance = AppStoreVersionLocalizationResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationResponse.to_json())

# convert the object into a dict
app_store_version_localization_response_dict = app_store_version_localization_response_instance.to_dict()
# create an instance of AppStoreVersionLocalizationResponse from a dict
app_store_version_localization_response_from_dict = AppStoreVersionLocalizationResponse.from_dict(app_store_version_localization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


