# AggregateRequest

Next id: 10

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_by** | [**List[AggregateBy]**](AggregateBy.md) | The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec. | [optional] 
**bucket_by_activity_segment** | [**BucketByActivity**](BucketByActivity.md) |  | [optional] 
**bucket_by_activity_type** | [**BucketByActivity**](BucketByActivity.md) |  | [optional] 
**bucket_by_session** | [**BucketBySession**](BucketBySession.md) |  | [optional] 
**bucket_by_time** | [**BucketByTime**](BucketByTime.md) |  | [optional] 
**end_time_millis** | **str** | The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. The maximum allowed difference between start_time_millis // and end_time_millis is 7776000000 (roughly 90 days). | [optional] 
**filtered_data_quality_standard** | **List[str]** | DO NOT POPULATE THIS FIELD. It is ignored. | [optional] 
**start_time_millis** | **str** | The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. | [optional] 

## Example

```python
from openapi_client.models.aggregate_request import AggregateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateRequest from a JSON string
aggregate_request_instance = AggregateRequest.from_json(json)
# print the JSON string representation of the object
print(AggregateRequest.to_json())

# convert the object into a dict
aggregate_request_dict = aggregate_request_instance.to_dict()
# create an instance of AggregateRequest from a dict
aggregate_request_from_dict = AggregateRequest.from_dict(aggregate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


