# HyperDriveExperimentBaseGeneratorConfig

Hyperparameter space and the sampling method configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Hyperparameter sampling method. | 
**parameter_space** | **Dict[str, List[object]]** | Dictionary specifying hyperparameter space. | 

## Example

```python
from openapi_client.models.hyper_drive_experiment_base_generator_config import HyperDriveExperimentBaseGeneratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveExperimentBaseGeneratorConfig from a JSON string
hyper_drive_experiment_base_generator_config_instance = HyperDriveExperimentBaseGeneratorConfig.from_json(json)
# print the JSON string representation of the object
print(HyperDriveExperimentBaseGeneratorConfig.to_json())

# convert the object into a dict
hyper_drive_experiment_base_generator_config_dict = hyper_drive_experiment_base_generator_config_instance.to_dict()
# create an instance of HyperDriveExperimentBaseGeneratorConfig from a dict
hyper_drive_experiment_base_generator_config_from_dict = HyperDriveExperimentBaseGeneratorConfig.from_dict(hyper_drive_experiment_base_generator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


