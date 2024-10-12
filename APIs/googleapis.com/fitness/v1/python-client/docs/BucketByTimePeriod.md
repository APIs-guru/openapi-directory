# BucketByTimePeriod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_zone_id** | **str** | org.joda.timezone.DateTimeZone | [optional] 
**type** | **str** |  | [optional] 
**value** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.bucket_by_time_period import BucketByTimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of BucketByTimePeriod from a JSON string
bucket_by_time_period_instance = BucketByTimePeriod.from_json(json)
# print the JSON string representation of the object
print(BucketByTimePeriod.to_json())

# convert the object into a dict
bucket_by_time_period_dict = bucket_by_time_period_instance.to_dict()
# create an instance of BucketByTimePeriod from a dict
bucket_by_time_period_from_dict = BucketByTimePeriod.from_dict(bucket_by_time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


