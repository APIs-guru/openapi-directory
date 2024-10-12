# PipelineReference

Pipeline reference type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Reference name. | [optional] 
**reference_name** | **str** | Reference pipeline name. | 
**type** | **str** | Pipeline reference type. | 

## Example

```python
from openapi_client.models.pipeline_reference import PipelineReference

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineReference from a JSON string
pipeline_reference_instance = PipelineReference.from_json(json)
# print the JSON string representation of the object
print(PipelineReference.to_json())

# convert the object into a dict
pipeline_reference_dict = pipeline_reference_instance.to_dict()
# create an instance of PipelineReference from a dict
pipeline_reference_from_dict = PipelineReference.from_dict(pipeline_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


