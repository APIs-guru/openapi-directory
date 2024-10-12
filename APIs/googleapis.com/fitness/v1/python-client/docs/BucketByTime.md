# BucketByTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_millis** | **str** | Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset. | [optional] 
**period** | [**BucketByTimePeriod**](BucketByTimePeriod.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket_by_time import BucketByTime

# TODO update the JSON string below
json = "{}"
# create an instance of BucketByTime from a JSON string
bucket_by_time_instance = BucketByTime.from_json(json)
# print the JSON string representation of the object
print(BucketByTime.to_json())

# convert the object into a dict
bucket_by_time_dict = bucket_by_time_instance.to_dict()
# create an instance of BucketByTime from a dict
bucket_by_time_from_dict = BucketByTime.from_dict(bucket_by_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


