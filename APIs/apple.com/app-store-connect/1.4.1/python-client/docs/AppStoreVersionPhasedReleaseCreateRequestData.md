# AppStoreVersionPhasedReleaseCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionPhasedReleaseCreateRequestDataAttributes**](AppStoreVersionPhasedReleaseCreateRequestDataAttributes.md) |  | [optional] 
**relationships** | [**AppStoreReviewDetailCreateRequestDataRelationships**](AppStoreReviewDetailCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_phased_release_create_request_data import AppStoreVersionPhasedReleaseCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionPhasedReleaseCreateRequestData from a JSON string
app_store_version_phased_release_create_request_data_instance = AppStoreVersionPhasedReleaseCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionPhasedReleaseCreateRequestData.to_json())

# convert the object into a dict
app_store_version_phased_release_create_request_data_dict = app_store_version_phased_release_create_request_data_instance.to_dict()
# create an instance of AppStoreVersionPhasedReleaseCreateRequestData from a dict
app_store_version_phased_release_create_request_data_from_dict = AppStoreVersionPhasedReleaseCreateRequestData.from_dict(app_store_version_phased_release_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


