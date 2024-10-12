# AppStoreVersionSubmissionCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionSubmissionCreateRequestData**](AppStoreVersionSubmissionCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_submission_create_request import AppStoreVersionSubmissionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionSubmissionCreateRequest from a JSON string
app_store_version_submission_create_request_instance = AppStoreVersionSubmissionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionSubmissionCreateRequest.to_json())

# convert the object into a dict
app_store_version_submission_create_request_dict = app_store_version_submission_create_request_instance.to_dict()
# create an instance of AppStoreVersionSubmissionCreateRequest from a dict
app_store_version_submission_create_request_from_dict = AppStoreVersionSubmissionCreateRequest.from_dict(app_store_version_submission_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


