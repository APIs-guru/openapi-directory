# GoogleCloudApigeeV1AsyncQueryResultView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Error code when there is a failure. | [optional] 
**error** | **str** | Error message when there is a failure. | [optional] 
**metadata** | [**GoogleCloudApigeeV1QueryMetadata**](GoogleCloudApigeeV1QueryMetadata.md) |  | [optional] 
**rows** | **List[object]** | Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: \&quot;(not set)\&quot;,…} | [optional] 
**state** | **str** | State of retrieving ResultView. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_async_query_result_view import GoogleCloudApigeeV1AsyncQueryResultView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AsyncQueryResultView from a JSON string
google_cloud_apigee_v1_async_query_result_view_instance = GoogleCloudApigeeV1AsyncQueryResultView.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AsyncQueryResultView.to_json())

# convert the object into a dict
google_cloud_apigee_v1_async_query_result_view_dict = google_cloud_apigee_v1_async_query_result_view_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AsyncQueryResultView from a dict
google_cloud_apigee_v1_async_query_result_view_from_dict = GoogleCloudApigeeV1AsyncQueryResultView.from_dict(google_cloud_apigee_v1_async_query_result_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


