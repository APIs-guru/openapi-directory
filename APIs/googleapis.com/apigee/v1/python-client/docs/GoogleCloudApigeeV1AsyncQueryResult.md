# GoogleCloudApigeeV1AsyncQueryResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires** | **str** | Query result will be unaccessable after this time. | [optional] 
**var_self** | **str** | Self link of the query results. Example: &#x60;/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result&#x60; or following format if query is running at host level: &#x60;/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_async_query_result import GoogleCloudApigeeV1AsyncQueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AsyncQueryResult from a JSON string
google_cloud_apigee_v1_async_query_result_instance = GoogleCloudApigeeV1AsyncQueryResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AsyncQueryResult.to_json())

# convert the object into a dict
google_cloud_apigee_v1_async_query_result_dict = google_cloud_apigee_v1_async_query_result_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AsyncQueryResult from a dict
google_cloud_apigee_v1_async_query_result_from_dict = GoogleCloudApigeeV1AsyncQueryResult.from_dict(google_cloud_apigee_v1_async_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


