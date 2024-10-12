# BucketByActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_data_source_id** | **str** | The default activity stream will be used if a specific activityDataSourceId is not specified. | [optional] 
**min_duration_millis** | **str** | Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data. | [optional] 

## Example

```python
from openapi_client.models.bucket_by_activity import BucketByActivity

# TODO update the JSON string below
json = "{}"
# create an instance of BucketByActivity from a JSON string
bucket_by_activity_instance = BucketByActivity.from_json(json)
# print the JSON string representation of the object
print(BucketByActivity.to_json())

# convert the object into a dict
bucket_by_activity_dict = bucket_by_activity_instance.to_dict()
# create an instance of BucketByActivity from a dict
bucket_by_activity_from_dict = BucketByActivity.from_dict(bucket_by_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


