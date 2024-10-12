# CreateCollectdTimeSeriesResponse

The CreateCollectdTimeSeries response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload_errors** | [**List[CollectdPayloadError]**](CollectdPayloadError.md) | Records the error status for points that were not written due to an error in the request.Failed requests for which nothing is written will return an error response instead. Requests where data points were rejected by the backend will set summary instead. | [optional] 
**summary** | [**CreateTimeSeriesSummary**](CreateTimeSeriesSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_collectd_time_series_response import CreateCollectdTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCollectdTimeSeriesResponse from a JSON string
create_collectd_time_series_response_instance = CreateCollectdTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCollectdTimeSeriesResponse.to_json())

# convert the object into a dict
create_collectd_time_series_response_dict = create_collectd_time_series_response_instance.to_dict()
# create an instance of CreateCollectdTimeSeriesResponse from a dict
create_collectd_time_series_response_from_dict = CreateCollectdTimeSeriesResponse.from_dict(create_collectd_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


