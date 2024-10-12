# AboutStorageQuota

The user's storage quota limits and usage. All fields are measured in bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **str** | The usage limit, if applicable. This will not be present if the user has unlimited storage. | [optional] 
**usage** | **str** | The total usage across all services. | [optional] 
**usage_in_drive** | **str** | The usage by all files in Google Drive. | [optional] 
**usage_in_drive_trash** | **str** | The usage by trashed files in Google Drive. | [optional] 

## Example

```python
from openapi_client.models.about_storage_quota import AboutStorageQuota

# TODO update the JSON string below
json = "{}"
# create an instance of AboutStorageQuota from a JSON string
about_storage_quota_instance = AboutStorageQuota.from_json(json)
# print the JSON string representation of the object
print(AboutStorageQuota.to_json())

# convert the object into a dict
about_storage_quota_dict = about_storage_quota_instance.to_dict()
# create an instance of AboutStorageQuota from a dict
about_storage_quota_from_dict = AboutStorageQuota.from_dict(about_storage_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


