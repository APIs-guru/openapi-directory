# AppStoreVersionRelationshipsAppStoreVersionSubmission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionRelationshipsAppStoreVersionSubmissionData**](AppStoreVersionRelationshipsAppStoreVersionSubmissionData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_relationships_app_store_version_submission import AppStoreVersionRelationshipsAppStoreVersionSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionRelationshipsAppStoreVersionSubmission from a JSON string
app_store_version_relationships_app_store_version_submission_instance = AppStoreVersionRelationshipsAppStoreVersionSubmission.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionRelationshipsAppStoreVersionSubmission.to_json())

# convert the object into a dict
app_store_version_relationships_app_store_version_submission_dict = app_store_version_relationships_app_store_version_submission_instance.to_dict()
# create an instance of AppStoreVersionRelationshipsAppStoreVersionSubmission from a dict
app_store_version_relationships_app_store_version_submission_from_dict = AppStoreVersionRelationshipsAppStoreVersionSubmission.from_dict(app_store_version_relationships_app_store_version_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


