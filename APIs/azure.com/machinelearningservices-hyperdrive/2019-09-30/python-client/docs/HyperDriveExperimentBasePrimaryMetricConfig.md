# HyperDriveExperimentBasePrimaryMetricConfig

Name of the primary metric and goal of optimizing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goal** | **str** | Determines if the primary metric has to be minimized/maximized. | 
**name** | **str** | Name of the primary metric reported by runs. | 

## Example

```python
from openapi_client.models.hyper_drive_experiment_base_primary_metric_config import HyperDriveExperimentBasePrimaryMetricConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveExperimentBasePrimaryMetricConfig from a JSON string
hyper_drive_experiment_base_primary_metric_config_instance = HyperDriveExperimentBasePrimaryMetricConfig.from_json(json)
# print the JSON string representation of the object
print(HyperDriveExperimentBasePrimaryMetricConfig.to_json())

# convert the object into a dict
hyper_drive_experiment_base_primary_metric_config_dict = hyper_drive_experiment_base_primary_metric_config_instance.to_dict()
# create an instance of HyperDriveExperimentBasePrimaryMetricConfig from a dict
hyper_drive_experiment_base_primary_metric_config_from_dict = HyperDriveExperimentBasePrimaryMetricConfig.from_dict(hyper_drive_experiment_base_primary_metric_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


