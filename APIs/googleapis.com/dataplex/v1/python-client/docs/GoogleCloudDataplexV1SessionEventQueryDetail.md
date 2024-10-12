# GoogleCloudDataplexV1SessionEventQueryDetail

Execution details of the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_processed_bytes** | **str** | The data processed by the query. | [optional] 
**duration** | **str** | Time taken for execution of the query. | [optional] 
**engine** | **str** | Query Execution engine. | [optional] 
**query_id** | **str** | The unique Query id identifying the query. | [optional] 
**query_text** | **str** | The query text executed. | [optional] 
**result_size_bytes** | **str** | The size of results the query produced. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_session_event_query_detail import GoogleCloudDataplexV1SessionEventQueryDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1SessionEventQueryDetail from a JSON string
google_cloud_dataplex_v1_session_event_query_detail_instance = GoogleCloudDataplexV1SessionEventQueryDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1SessionEventQueryDetail.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_session_event_query_detail_dict = google_cloud_dataplex_v1_session_event_query_detail_instance.to_dict()
# create an instance of GoogleCloudDataplexV1SessionEventQueryDetail from a dict
google_cloud_dataplex_v1_session_event_query_detail_from_dict = GoogleCloudDataplexV1SessionEventQueryDetail.from_dict(google_cloud_dataplex_v1_session_event_query_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


