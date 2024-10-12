# HyperDriveExperiment

Part of response for HyperDrive_CreateExperiment in case of success. Contains details about the created hyperdrive run.

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
**all_jobs_generated** | **bool** | Indicates if all runs have been generated. | 
**cancellation_requested** | **bool** | Indicates if cancellation has been requested for this Hyperdrive run. | 
**created** | **datetime** | Hyperdrive run creation time. | 
**created_by_user_id** | **int** | Id of the user who created the Hyperdrive run. | 
**experiment_id** | **str** | Hyperdrive run id. | 
**experiment_uri** | **str** | Hyperdrive run Uri. | [optional] 
**hyperdrive_run_id** | **str** | Hyperdrive run id. | 
**modified** | **datetime** | Hyperdrive run modification time. | 
**status** | **str** | Hyperdrive run status. | 
**study_uri** | **str** | Study Uri of the Hyperdrive run. | [optional] 

## Example

```python
from openapi_client.models.hyper_drive_experiment import HyperDriveExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveExperiment from a JSON string
hyper_drive_experiment_instance = HyperDriveExperiment.from_json(json)
# print the JSON string representation of the object
print(HyperDriveExperiment.to_json())

# convert the object into a dict
hyper_drive_experiment_dict = hyper_drive_experiment_instance.to_dict()
# create an instance of HyperDriveExperiment from a dict
hyper_drive_experiment_from_dict = HyperDriveExperiment.from_dict(hyper_drive_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


