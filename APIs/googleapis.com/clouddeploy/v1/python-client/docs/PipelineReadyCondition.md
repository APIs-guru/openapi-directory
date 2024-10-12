# PipelineReadyCondition

PipelineReadyCondition contains information around the status of the Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | True if the Pipeline is in a valid state. Otherwise at least one condition in &#x60;PipelineCondition&#x60; is in an invalid state. Iterate over those conditions and see which condition(s) has status &#x3D; false to find out what is wrong with the Pipeline. | [optional] 
**update_time** | **str** | Last time the condition was updated. | [optional] 

## Example

```python
from openapi_client.models.pipeline_ready_condition import PipelineReadyCondition

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineReadyCondition from a JSON string
pipeline_ready_condition_instance = PipelineReadyCondition.from_json(json)
# print the JSON string representation of the object
print(PipelineReadyCondition.to_json())

# convert the object into a dict
pipeline_ready_condition_dict = pipeline_ready_condition_instance.to_dict()
# create an instance of PipelineReadyCondition from a dict
pipeline_ready_condition_from_dict = PipelineReadyCondition.from_dict(pipeline_ready_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


