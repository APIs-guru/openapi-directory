# RealtimeDataQuery

Real time data request query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **str** | List of real time dimensions. | [optional] 
**filters** | **str** | Comma-separated list of dimension or metric filters. | [optional] 
**ids** | **str** | Unique table ID. | [optional] 
**max_results** | **int** | Maximum results per page. | [optional] 
**metrics** | **List[str]** | List of real time metrics. | [optional] 
**sort** | **List[str]** | List of dimensions or metrics based on which real time data is sorted. | [optional] 

## Example

```python
from openapi_client.models.realtime_data_query import RealtimeDataQuery

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeDataQuery from a JSON string
realtime_data_query_instance = RealtimeDataQuery.from_json(json)
# print the JSON string representation of the object
print(RealtimeDataQuery.to_json())

# convert the object into a dict
realtime_data_query_dict = realtime_data_query_instance.to_dict()
# create an instance of RealtimeDataQuery from a dict
realtime_data_query_from_dict = RealtimeDataQuery.from_dict(realtime_data_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


