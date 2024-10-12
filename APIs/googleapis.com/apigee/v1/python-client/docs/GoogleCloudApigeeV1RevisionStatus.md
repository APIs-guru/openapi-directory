# GoogleCloudApigeeV1RevisionStatus

The status of a specific resource revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[GoogleCloudApigeeV1UpdateError]**](GoogleCloudApigeeV1UpdateError.md) | Errors reported when attempting to load this revision. | [optional] 
**json_spec** | **str** | The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits. | [optional] 
**replicas** | **int** | The number of replicas that have successfully loaded this revision. | [optional] 
**revision_id** | **str** | The revision of the resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_revision_status import GoogleCloudApigeeV1RevisionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RevisionStatus from a JSON string
google_cloud_apigee_v1_revision_status_instance = GoogleCloudApigeeV1RevisionStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RevisionStatus.to_json())

# convert the object into a dict
google_cloud_apigee_v1_revision_status_dict = google_cloud_apigee_v1_revision_status_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RevisionStatus from a dict
google_cloud_apigee_v1_revision_status_from_dict = GoogleCloudApigeeV1RevisionStatus.from_dict(google_cloud_apigee_v1_revision_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


