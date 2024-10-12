# RunDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**RunConfiguration**](RunConfiguration.md) |  | [optional] 
**parent_run_id** | **str** | Specifies that the run history entry for this execution should be scoped within  an existing run as a child. Defaults to null, meaning the run has no parent.  This is intended for first-party service integration, not third-party API users. | [optional] 
**run_type** | **str** | Specifies the runsource property for this run. The default value is \&quot;experiment\&quot; if not specified. | [optional] 
**snapshot_id** | **str** | Snapshots are user project folders that have been uploaded to the cloud for subsequent  execution. This field is required when executing against cloud-based compute targets  unless the run submission was against the API endpoint that takes a zipped project folder  inline with the request. | [optional] 

## Example

```python
from openapi_client.models.run_definition import RunDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RunDefinition from a JSON string
run_definition_instance = RunDefinition.from_json(json)
# print the JSON string representation of the object
print(RunDefinition.to_json())

# convert the object into a dict
run_definition_dict = run_definition_instance.to_dict()
# create an instance of RunDefinition from a dict
run_definition_from_dict = RunDefinition.from_dict(run_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


