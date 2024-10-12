# QueryTimeSeriesResponse

The QueryTimeSeries response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 
**partial_errors** | [**List[Status]**](Status.md) | Query execution errors that may have caused the time series data returned to be incomplete. The available data will be available in the response. | [optional] 
**time_series_data** | [**List[TimeSeriesData]**](TimeSeriesData.md) | The time series data. | [optional] 
**time_series_descriptor** | [**TimeSeriesDescriptor**](TimeSeriesDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_time_series_response import QueryTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTimeSeriesResponse from a JSON string
query_time_series_response_instance = QueryTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(QueryTimeSeriesResponse.to_json())

# convert the object into a dict
query_time_series_response_dict = query_time_series_response_instance.to_dict()
# create an instance of QueryTimeSeriesResponse from a dict
query_time_series_response_from_dict = QueryTimeSeriesResponse.from_dict(query_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


