# BucketMetadata

Metadata for LongRunningUpdateBucket Operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_bucket_request** | [**CreateBucketRequest**](CreateBucketRequest.md) |  | [optional] 
**end_time** | **str** | The end time of an operation. | [optional] 
**start_time** | **str** | The create time of an operation. | [optional] 
**state** | **str** | Output only. State of an operation. | [optional] [readonly] 
**update_bucket_request** | [**UpdateBucketRequest**](UpdateBucketRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket_metadata import BucketMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BucketMetadata from a JSON string
bucket_metadata_instance = BucketMetadata.from_json(json)
# print the JSON string representation of the object
print(BucketMetadata.to_json())

# convert the object into a dict
bucket_metadata_dict = bucket_metadata_instance.to_dict()
# create an instance of BucketMetadata from a dict
bucket_metadata_from_dict = BucketMetadata.from_dict(bucket_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


