# GoogleCloudApigeeV1ListAsyncQueriesResponse

The response for ListAsyncQueries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**List[GoogleCloudApigeeV1AsyncQuery]**](GoogleCloudApigeeV1AsyncQuery.md) | The asynchronous queries belong to requested resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_async_queries_response import GoogleCloudApigeeV1ListAsyncQueriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListAsyncQueriesResponse from a JSON string
google_cloud_apigee_v1_list_async_queries_response_instance = GoogleCloudApigeeV1ListAsyncQueriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListAsyncQueriesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_async_queries_response_dict = google_cloud_apigee_v1_list_async_queries_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListAsyncQueriesResponse from a dict
google_cloud_apigee_v1_list_async_queries_response_from_dict = GoogleCloudApigeeV1ListAsyncQueriesResponse.from_dict(google_cloud_apigee_v1_list_async_queries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


