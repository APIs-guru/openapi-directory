# BuildProvenance

Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_options** | **Dict[str, str]** | Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. | [optional] 
**builder_version** | **str** | Version string of the builder at the time this build was executed. | [optional] 
**built_artifacts** | [**List[Artifact]**](Artifact.md) | Output of the build. | [optional] 
**commands** | [**List[Command]**](Command.md) | Commands requested by the build. | [optional] 
**create_time** | **str** | Time at which the build was created. | [optional] 
**creator** | **str** | E-mail address of the user who initiated this build. Note that this was the user&#39;s e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. | [optional] 
**end_time** | **str** | Time at which execution of the build was finished. | [optional] 
**id** | **str** | Required. Unique identifier of the build. | [optional] 
**logs_uri** | **str** | URI where any logs for this provenance were written. | [optional] 
**project_id** | **str** | ID of the project. | [optional] 
**source_provenance** | [**Source**](Source.md) |  | [optional] 
**start_time** | **str** | Time at which execution of the build was started. | [optional] 
**trigger_id** | **str** | Trigger identifier if the build was triggered automatically; empty if not. | [optional] 

## Example

```python
from openapi_client.models.build_provenance import BuildProvenance

# TODO update the JSON string below
json = "{}"
# create an instance of BuildProvenance from a JSON string
build_provenance_instance = BuildProvenance.from_json(json)
# print the JSON string representation of the object
print(BuildProvenance.to_json())

# convert the object into a dict
build_provenance_dict = build_provenance_instance.to_dict()
# create an instance of BuildProvenance from a dict
build_provenance_from_dict = BuildProvenance.from_dict(build_provenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


