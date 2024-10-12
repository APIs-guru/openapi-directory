# TestCloudFileHashResponse

Response message for single uploaded file hash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksum** | **str** | SHA256 hash of the file | 
**file_type** | **str** | Type of the file | 
**relative_path** | **str** | Relative path of the file | [optional] 
**upload_status** | [**TestCloudHashUploadStatus**](TestCloudHashUploadStatus.md) |  | 

## Example

```python
from openapi_client.models.test_cloud_file_hash_response import TestCloudFileHashResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudFileHashResponse from a JSON string
test_cloud_file_hash_response_instance = TestCloudFileHashResponse.from_json(json)
# print the JSON string representation of the object
print(TestCloudFileHashResponse.to_json())

# convert the object into a dict
test_cloud_file_hash_response_dict = test_cloud_file_hash_response_instance.to_dict()
# create an instance of TestCloudFileHashResponse from a dict
test_cloud_file_hash_response_from_dict = TestCloudFileHashResponse.from_dict(test_cloud_file_hash_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


