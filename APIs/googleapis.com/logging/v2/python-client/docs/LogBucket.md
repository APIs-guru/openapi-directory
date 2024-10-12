# LogBucket

Describes a repository in which log entries are stored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_enabled** | **bool** | Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled. | [optional] 
**cmek_settings** | [**CmekSettings**](CmekSettings.md) |  | [optional] 
**create_time** | **str** | Output only. The creation timestamp of the bucket. This is not set for any of the default buckets. | [optional] [readonly] 
**description** | **str** | Optional. Describes this bucket. | [optional] 
**index_configs** | [**List[IndexConfig]**](IndexConfig.md) | Optional. A list of indexed fields and related configuration data. | [optional] 
**lifecycle_state** | **str** | Output only. The bucket lifecycle state. | [optional] [readonly] 
**locked** | **bool** | Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty. | [optional] 
**name** | **str** | Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed. | [optional] [readonly] 
**restricted_fields** | **List[str]** | Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz) | [optional] 
**retention_days** | **int** | Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of the bucket. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_bucket import LogBucket

# TODO update the JSON string below
json = "{}"
# create an instance of LogBucket from a JSON string
log_bucket_instance = LogBucket.from_json(json)
# print the JSON string representation of the object
print(LogBucket.to_json())

# convert the object into a dict
log_bucket_dict = log_bucket_instance.to_dict()
# create an instance of LogBucket from a dict
log_bucket_from_dict = LogBucket.from_dict(log_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


