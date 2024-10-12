# AppStoreVersionLocalizationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionLocalizationCreateRequestData**](AppStoreVersionLocalizationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_localization_create_request import AppStoreVersionLocalizationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationCreateRequest from a JSON string
app_store_version_localization_create_request_instance = AppStoreVersionLocalizationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationCreateRequest.to_json())

# convert the object into a dict
app_store_version_localization_create_request_dict = app_store_version_localization_create_request_instance.to_dict()
# create an instance of AppStoreVersionLocalizationCreateRequest from a dict
app_store_version_localization_create_request_from_dict = AppStoreVersionLocalizationCreateRequest.from_dict(app_store_version_localization_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


