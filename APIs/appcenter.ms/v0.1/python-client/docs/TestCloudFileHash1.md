# TestCloudFileHash1

Hash, type, path and byte range of a file that is required in test run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksum** | **str** | SHA256 hash of the file | 
**file_type** | **str** | Type of the file | 
**relative_path** | **str** | Relative path of the file | 

## Example

```python
from openapi_client.models.test_cloud_file_hash1 import TestCloudFileHash1

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudFileHash1 from a JSON string
test_cloud_file_hash1_instance = TestCloudFileHash1.from_json(json)
# print the JSON string representation of the object
print(TestCloudFileHash1.to_json())

# convert the object into a dict
test_cloud_file_hash1_dict = test_cloud_file_hash1_instance.to_dict()
# create an instance of TestCloudFileHash1 from a dict
test_cloud_file_hash1_from_dict = TestCloudFileHash1.from_dict(test_cloud_file_hash1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


