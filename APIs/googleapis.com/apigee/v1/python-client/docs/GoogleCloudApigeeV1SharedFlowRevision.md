# GoogleCloudApigeeV1SharedFlowRevision

The metadata describing a shared flow revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_version** | [**GoogleCloudApigeeV1ConfigVersion**](GoogleCloudApigeeV1ConfigVersion.md) |  | [optional] 
**context_info** | **str** | A textual description of the shared flow revision. | [optional] 
**created_at** | **str** | Time at which this shared flow revision was created, in milliseconds since epoch. | [optional] 
**description** | **str** | Description of the shared flow revision. | [optional] 
**display_name** | **str** | The human readable name of this shared flow. | [optional] 
**entity_meta_data_as_properties** | **Dict[str, str]** | A Key-Value map of metadata about this shared flow revision. | [optional] 
**last_modified_at** | **str** | Time at which this shared flow revision was most recently modified, in milliseconds since epoch. | [optional] 
**name** | **str** | The resource ID of the parent shared flow. | [optional] 
**policies** | **List[str]** | A list of policy names included in this shared flow revision. | [optional] 
**resource_files** | [**GoogleCloudApigeeV1ResourceFiles**](GoogleCloudApigeeV1ResourceFiles.md) |  | [optional] 
**resources** | **List[str]** | A list of the resources included in this shared flow revision formatted as \&quot;{type}://{name}\&quot;. | [optional] 
**revision** | **str** | The resource ID of this revision. | [optional] 
**shared_flows** | **List[str]** | A list of the shared flow names included in this shared flow revision. | [optional] 
**type** | **str** | The string \&quot;Application\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_shared_flow_revision import GoogleCloudApigeeV1SharedFlowRevision

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SharedFlowRevision from a JSON string
google_cloud_apigee_v1_shared_flow_revision_instance = GoogleCloudApigeeV1SharedFlowRevision.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SharedFlowRevision.to_json())

# convert the object into a dict
google_cloud_apigee_v1_shared_flow_revision_dict = google_cloud_apigee_v1_shared_flow_revision_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SharedFlowRevision from a dict
google_cloud_apigee_v1_shared_flow_revision_from_dict = GoogleCloudApigeeV1SharedFlowRevision.from_dict(google_cloud_apigee_v1_shared_flow_revision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


