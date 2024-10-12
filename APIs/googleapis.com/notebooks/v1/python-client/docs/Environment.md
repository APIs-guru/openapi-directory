# Environment

Definition of a software environment that is used to start a notebook instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_image** | [**ContainerImage**](ContainerImage.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this environment was created. | [optional] [readonly] 
**description** | **str** | A brief description of this environment. | [optional] 
**display_name** | **str** | Display name of this environment for the UI. | [optional] 
**name** | **str** | Output only. Name of this environment. Format: &#x60;projects/{project_id}/locations/{location}/environments/{environment_id}&#x60; | [optional] [readonly] 
**post_startup_script** | **str** | Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: &#x60;\&quot;gs://path-to-file/file-name\&quot;&#x60; | [optional] 
**vm_image** | [**VmImage**](VmImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


