# PipelineUpdateParameters

Request payload used to update an existing Azure Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Dictionary of key-value pairs to be set as tags on the Azure Pipeline. This will overwrite any existing tags. | [optional] 

## Example

```python
from openapi_client.models.pipeline_update_parameters import PipelineUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineUpdateParameters from a JSON string
pipeline_update_parameters_instance = PipelineUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(PipelineUpdateParameters.to_json())

# convert the object into a dict
pipeline_update_parameters_dict = pipeline_update_parameters_instance.to_dict()
# create an instance of PipelineUpdateParameters from a dict
pipeline_update_parameters_from_dict = PipelineUpdateParameters.from_dict(pipeline_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


