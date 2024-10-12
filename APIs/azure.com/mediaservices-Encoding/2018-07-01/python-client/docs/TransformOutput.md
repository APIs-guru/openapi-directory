# TransformOutput

Describes the properties of a TransformOutput, which are the rules to be applied while generating the desired output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_error** | **str** | A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with &#39;ContinueJob&#39;. The default is &#39;StopProcessingJob&#39;. | [optional] 
**preset** | [**Preset**](Preset.md) |  | 
**relative_priority** | **str** | Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. | [optional] 

## Example

```python
from openapi_client.models.transform_output import TransformOutput

# TODO update the JSON string below
json = "{}"
# create an instance of TransformOutput from a JSON string
transform_output_instance = TransformOutput.from_json(json)
# print the JSON string representation of the object
print(TransformOutput.to_json())

# convert the object into a dict
transform_output_dict = transform_output_instance.to_dict()
# create an instance of TransformOutput from a dict
transform_output_from_dict = TransformOutput.from_dict(transform_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


