# QuerySeriesRequest

QuerySeries holds all parameters of the Prometheus upstream API for querying series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 
**start** | **str** | The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 

## Example

```python
from openapi_client.models.query_series_request import QuerySeriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QuerySeriesRequest from a JSON string
query_series_request_instance = QuerySeriesRequest.from_json(json)
# print the JSON string representation of the object
print(QuerySeriesRequest.to_json())

# convert the object into a dict
query_series_request_dict = query_series_request_instance.to_dict()
# create an instance of QuerySeriesRequest from a dict
query_series_request_from_dict = QuerySeriesRequest.from_dict(query_series_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


