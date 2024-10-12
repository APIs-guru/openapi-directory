# PipelineBootstrapConfiguration

Defines bootstrap configuration for a CI/CD pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the bootstrap configuration. | 
**repository** | [**CodeRepository**](CodeRepository.md) |  | [optional] 
**template_id** | **str** | Identifier of the pipeline template used for configuring pipeline. | 
**template_parameters** | **Dict[str, str]** | Dictionary of inputs used for configuring pipeline. The keys for inputs are defined by pipeline template. | [optional] 

## Example

```python
from openapi_client.models.pipeline_bootstrap_configuration import PipelineBootstrapConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineBootstrapConfiguration from a JSON string
pipeline_bootstrap_configuration_instance = PipelineBootstrapConfiguration.from_json(json)
# print the JSON string representation of the object
print(PipelineBootstrapConfiguration.to_json())

# convert the object into a dict
pipeline_bootstrap_configuration_dict = pipeline_bootstrap_configuration_instance.to_dict()
# create an instance of PipelineBootstrapConfiguration from a dict
pipeline_bootstrap_configuration_from_dict = PipelineBootstrapConfiguration.from_dict(pipeline_bootstrap_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


