# QueryTimeSeriesRequest

The QueryTimeSeries request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | A positive number that is the maximum number of time_series_data to return. | [optional] 
**page_token** | **str** | If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. | [optional] 
**query** | **str** | Required. The query in the Monitoring Query Language (https://cloud.google.com/monitoring/mql/reference) format. The default time zone is in UTC. | [optional] 

## Example

```python
from openapi_client.models.query_time_series_request import QueryTimeSeriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTimeSeriesRequest from a JSON string
query_time_series_request_instance = QueryTimeSeriesRequest.from_json(json)
# print the JSON string representation of the object
print(QueryTimeSeriesRequest.to_json())

# convert the object into a dict
query_time_series_request_dict = query_time_series_request_instance.to_dict()
# create an instance of QueryTimeSeriesRequest from a dict
query_time_series_request_from_dict = QueryTimeSeriesRequest.from_dict(query_time_series_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


