# AppStoreVersionLocalizationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionLocalizationCreateRequestDataAttributes**](AppStoreVersionLocalizationCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppStoreReviewDetailCreateRequestDataRelationships**](AppStoreReviewDetailCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_localization_create_request_data import AppStoreVersionLocalizationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationCreateRequestData from a JSON string
app_store_version_localization_create_request_data_instance = AppStoreVersionLocalizationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationCreateRequestData.to_json())

# convert the object into a dict
app_store_version_localization_create_request_data_dict = app_store_version_localization_create_request_data_instance.to_dict()
# create an instance of AppStoreVersionLocalizationCreateRequestData from a dict
app_store_version_localization_create_request_data_from_dict = AppStoreVersionLocalizationCreateRequestData.from_dict(app_store_version_localization_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


