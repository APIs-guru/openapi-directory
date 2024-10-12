# PortabilityArchiveState

Resource that contains the state of an Archive job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of ArchiveJob&#39;s PortabilityArchiveState singleton. The format is: archiveJobs/{archive_job}/portabilityArchiveState. archive_job is the job ID provided in the request. | [optional] 
**state** | **str** | Resource that represents the state of the Archive job. | [optional] 
**urls** | **List[str]** | If the state is complete, this method returns the signed URLs of the objects in the Cloud Storage bucket. | [optional] 

## Example

```python
from openapi_client.models.portability_archive_state import PortabilityArchiveState

# TODO update the JSON string below
json = "{}"
# create an instance of PortabilityArchiveState from a JSON string
portability_archive_state_instance = PortabilityArchiveState.from_json(json)
# print the JSON string representation of the object
print(PortabilityArchiveState.to_json())

# convert the object into a dict
portability_archive_state_dict = portability_archive_state_instance.to_dict()
# create an instance of PortabilityArchiveState from a dict
portability_archive_state_from_dict = PortabilityArchiveState.from_dict(portability_archive_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


