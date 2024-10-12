# AppStoreVersionSubmission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreVersionSubmissionRelationships**](AppStoreVersionSubmissionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_submission import AppStoreVersionSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionSubmission from a JSON string
app_store_version_submission_instance = AppStoreVersionSubmission.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionSubmission.to_json())

# convert the object into a dict
app_store_version_submission_dict = app_store_version_submission_instance.to_dict()
# create an instance of AppStoreVersionSubmission from a dict
app_store_version_submission_from_dict = AppStoreVersionSubmission.from_dict(app_store_version_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


