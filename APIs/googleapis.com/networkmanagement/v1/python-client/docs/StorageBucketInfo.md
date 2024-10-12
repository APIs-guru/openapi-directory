# StorageBucketInfo

For display only. Metadata associated with Storage Bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Cloud Storage Bucket name. | [optional] 

## Example

```python
from openapi_client.models.storage_bucket_info import StorageBucketInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StorageBucketInfo from a JSON string
storage_bucket_info_instance = StorageBucketInfo.from_json(json)
# print the JSON string representation of the object
print(StorageBucketInfo.to_json())

# convert the object into a dict
storage_bucket_info_dict = storage_bucket_info_instance.to_dict()
# create an instance of StorageBucketInfo from a dict
storage_bucket_info_from_dict = StorageBucketInfo.from_dict(storage_bucket_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


