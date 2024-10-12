# GoogleCloudApigeeV1QueryMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | Dimensions of the AsyncQuery. | [optional] 
**end_timestamp** | **str** | End timestamp of the query range. | [optional] 
**metrics** | **List[str]** | Metrics of the AsyncQuery. Example: [\&quot;name:message_count,func:sum,alias:sum_message_count\&quot;] | [optional] 
**output_format** | **str** | Output format. | [optional] 
**start_timestamp** | **str** | Start timestamp of the query range. | [optional] 
**time_unit** | **str** | Query GroupBy time unit. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_query_metadata import GoogleCloudApigeeV1QueryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1QueryMetadata from a JSON string
google_cloud_apigee_v1_query_metadata_instance = GoogleCloudApigeeV1QueryMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1QueryMetadata.to_json())

# convert the object into a dict
google_cloud_apigee_v1_query_metadata_dict = google_cloud_apigee_v1_query_metadata_instance.to_dict()
# create an instance of GoogleCloudApigeeV1QueryMetadata from a dict
google_cloud_apigee_v1_query_metadata_from_dict = GoogleCloudApigeeV1QueryMetadata.from_dict(google_cloud_apigee_v1_query_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


