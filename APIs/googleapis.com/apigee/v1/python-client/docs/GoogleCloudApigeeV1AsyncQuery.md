# GoogleCloudApigeeV1AsyncQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | Creation time of the query. | [optional] 
**envgroup_hostname** | **str** | Hostname is available only when query is executed at host level. | [optional] 
**error** | **str** | Error is set when query fails. | [optional] 
**execution_time** | **str** | ExecutionTime is available only after the query is completed. | [optional] 
**name** | **str** | Asynchronous Query Name. | [optional] 
**var_query_params** | [**GoogleCloudApigeeV1QueryMetadata**](GoogleCloudApigeeV1QueryMetadata.md) |  | [optional] 
**report_definition_id** | **str** | Asynchronous Report ID. | [optional] 
**result** | [**GoogleCloudApigeeV1AsyncQueryResult**](GoogleCloudApigeeV1AsyncQueryResult.md) |  | [optional] 
**result_file_size** | **str** | ResultFileSize is available only after the query is completed. | [optional] 
**result_rows** | **str** | ResultRows is available only after the query is completed. | [optional] 
**var_self** | **str** | Self link of the query. Example: &#x60;/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd&#x60; or following format if query is running at host level: &#x60;/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd&#x60; | [optional] 
**state** | **str** | Query state could be \&quot;enqueued\&quot;, \&quot;running\&quot;, \&quot;completed\&quot;, \&quot;failed\&quot;. | [optional] 
**updated** | **str** | Last updated timestamp for the query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_async_query import GoogleCloudApigeeV1AsyncQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AsyncQuery from a JSON string
google_cloud_apigee_v1_async_query_instance = GoogleCloudApigeeV1AsyncQuery.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AsyncQuery.to_json())

# convert the object into a dict
google_cloud_apigee_v1_async_query_dict = google_cloud_apigee_v1_async_query_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AsyncQuery from a dict
google_cloud_apigee_v1_async_query_from_dict = GoogleCloudApigeeV1AsyncQuery.from_dict(google_cloud_apigee_v1_async_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


