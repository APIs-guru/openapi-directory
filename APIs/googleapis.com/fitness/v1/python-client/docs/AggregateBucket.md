# AggregateBucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | **int** | Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT | [optional] 
**dataset** | [**List[Dataset]**](Dataset.md) | There will be one dataset per AggregateBy in the request. | [optional] 
**end_time_millis** | **str** | The end time for the aggregated data, in milliseconds since epoch, inclusive. | [optional] 
**session** | [**Session**](Session.md) |  | [optional] 
**start_time_millis** | **str** | The start time for the aggregated data, in milliseconds since epoch, inclusive. | [optional] 
**type** | **str** | The type of a bucket signifies how the data aggregation is performed in the bucket. | [optional] 

## Example

```python
from openapi_client.models.aggregate_bucket import AggregateBucket

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateBucket from a JSON string
aggregate_bucket_instance = AggregateBucket.from_json(json)
# print the JSON string representation of the object
print(AggregateBucket.to_json())

# convert the object into a dict
aggregate_bucket_dict = aggregate_bucket_instance.to_dict()
# create an instance of AggregateBucket from a dict
aggregate_bucket_from_dict = AggregateBucket.from_dict(aggregate_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


