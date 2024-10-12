# HyperDriveExperimentBase

Base object for both request and response of HyperDrive_CreateExperiment api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for Hyperdrive run. | [optional] 
**generator_config** | [**HyperDriveExperimentBaseGeneratorConfig**](HyperDriveExperimentBaseGeneratorConfig.md) |  | 
**max_concurrent_jobs** | **int** | Maximum number of runs to run concurrently. | [optional] 
**max_duration_minutes** | **int** | Maximum duration of the Hyperdrive run. | [optional] 
**max_total_jobs** | **int** | Maximum number of runs. | [optional] 
**name** | **str** | Name of the Hyperdrive run. | 
**platform** | **str** | Platform of the Hyperdrive run. | 
**platform_config** | **object** | Platform config object specifying the run definition structure. | 
**policy_config** | [**HyperDrivePolicyConfigBase**](HyperDrivePolicyConfigBase.md) |  | 
**primary_metric_config** | [**HyperDriveExperimentBasePrimaryMetricConfig**](HyperDriveExperimentBasePrimaryMetricConfig.md) |  | 
**study_id** | **int** | Study Id of the Hyperdrive run. | [optional] 

## Example

```python
from openapi_client.models.hyper_drive_experiment_base import HyperDriveExperimentBase

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveExperimentBase from a JSON string
hyper_drive_experiment_base_instance = HyperDriveExperimentBase.from_json(json)
# print the JSON string representation of the object
print(HyperDriveExperimentBase.to_json())

# convert the object into a dict
hyper_drive_experiment_base_dict = hyper_drive_experiment_base_instance.to_dict()
# create an instance of HyperDriveExperimentBase from a dict
hyper_drive_experiment_base_from_dict = HyperDriveExperimentBase.from_dict(hyper_drive_experiment_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


