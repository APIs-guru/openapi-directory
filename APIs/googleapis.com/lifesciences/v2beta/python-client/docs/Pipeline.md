# Pipeline

Specifies a series of actions to execute, expressed as Docker containers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) | The list of actions to execute, in the order they are specified. | [optional] 
**encrypted_environment** | [**Secret**](Secret.md) |  | [optional] 
**environment** | **Dict[str, str]** | The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value). | [optional] 
**resources** | [**Resources**](Resources.md) |  | [optional] 
**timeout** | **str** | The maximum amount of time to give the pipeline to complete. This includes the time spent waiting for a worker to be allocated. If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED. If unspecified, it will default to 7 days. | [optional] 

## Example

```python
from openapi_client.models.pipeline import Pipeline

# TODO update the JSON string below
json = "{}"
# create an instance of Pipeline from a JSON string
pipeline_instance = Pipeline.from_json(json)
# print the JSON string representation of the object
print(Pipeline.to_json())

# convert the object into a dict
pipeline_dict = pipeline_instance.to_dict()
# create an instance of Pipeline from a dict
pipeline_from_dict = Pipeline.from_dict(pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


