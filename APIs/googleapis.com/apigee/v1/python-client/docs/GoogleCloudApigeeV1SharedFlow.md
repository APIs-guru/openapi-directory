# GoogleCloudApigeeV1SharedFlow

The metadata describing a shared flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latest_revision_id** | **str** | The id of the most recently created revision for this shared flow. | [optional] 
**meta_data** | [**GoogleCloudApigeeV1EntityMetadata**](GoogleCloudApigeeV1EntityMetadata.md) |  | [optional] 
**name** | **str** | The ID of the shared flow. | [optional] 
**revision** | **List[str]** | A list of revisions of this shared flow. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_shared_flow import GoogleCloudApigeeV1SharedFlow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SharedFlow from a JSON string
google_cloud_apigee_v1_shared_flow_instance = GoogleCloudApigeeV1SharedFlow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SharedFlow.to_json())

# convert the object into a dict
google_cloud_apigee_v1_shared_flow_dict = google_cloud_apigee_v1_shared_flow_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SharedFlow from a dict
google_cloud_apigee_v1_shared_flow_from_dict = GoogleCloudApigeeV1SharedFlow.from_dict(google_cloud_apigee_v1_shared_flow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


