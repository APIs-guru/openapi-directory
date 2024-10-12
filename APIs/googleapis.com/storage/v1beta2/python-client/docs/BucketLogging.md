# BucketLogging

The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_bucket** | **str** | The destination bucket where the current bucket&#39;s logs should be placed. | [optional] 
**log_object_prefix** | **str** | A prefix for log object names. | [optional] 

## Example

```python
from openapi_client.models.bucket_logging import BucketLogging

# TODO update the JSON string below
json = "{}"
# create an instance of BucketLogging from a JSON string
bucket_logging_instance = BucketLogging.from_json(json)
# print the JSON string representation of the object
print(BucketLogging.to_json())

# convert the object into a dict
bucket_logging_dict = bucket_logging_instance.to_dict()
# create an instance of BucketLogging from a dict
bucket_logging_from_dict = BucketLogging.from_dict(bucket_logging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


