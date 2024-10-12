# AppStoreVersionSubmissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionSubmission**](AppStoreVersionSubmission.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_submission_response import AppStoreVersionSubmissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionSubmissionResponse from a JSON string
app_store_version_submission_response_instance = AppStoreVersionSubmissionResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionSubmissionResponse.to_json())

# convert the object into a dict
app_store_version_submission_response_dict = app_store_version_submission_response_instance.to_dict()
# create an instance of AppStoreVersionSubmissionResponse from a dict
app_store_version_submission_response_from_dict = AppStoreVersionSubmissionResponse.from_dict(app_store_version_submission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


