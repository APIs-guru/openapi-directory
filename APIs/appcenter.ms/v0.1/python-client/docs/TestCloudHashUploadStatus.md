# TestCloudHashUploadStatus

Status of the upload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | URI that should be used to make POST request if file with given hash doesn&#39;t exist. This is set when status_code is equal to 412 | [optional] 
**status_code** | **float** | HTTP status code that represent result of upload | 

## Example

```python
from openapi_client.models.test_cloud_hash_upload_status import TestCloudHashUploadStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudHashUploadStatus from a JSON string
test_cloud_hash_upload_status_instance = TestCloudHashUploadStatus.from_json(json)
# print the JSON string representation of the object
print(TestCloudHashUploadStatus.to_json())

# convert the object into a dict
test_cloud_hash_upload_status_dict = test_cloud_hash_upload_status_instance.to_dict()
# create an instance of TestCloudHashUploadStatus from a dict
test_cloud_hash_upload_status_from_dict = TestCloudHashUploadStatus.from_dict(test_cloud_hash_upload_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


