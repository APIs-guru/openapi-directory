# HyperDriveExperimentResponse

Response for HyperDrive_CreateExperiment in case of success.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Response code. | 
**result** | [**HyperDriveExperiment**](HyperDriveExperiment.md) |  | 

## Example

```python
from openapi_client.models.hyper_drive_experiment_response import HyperDriveExperimentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveExperimentResponse from a JSON string
hyper_drive_experiment_response_instance = HyperDriveExperimentResponse.from_json(json)
# print the JSON string representation of the object
print(HyperDriveExperimentResponse.to_json())

# convert the object into a dict
hyper_drive_experiment_response_dict = hyper_drive_experiment_response_instance.to_dict()
# create an instance of HyperDriveExperimentResponse from a dict
hyper_drive_experiment_response_from_dict = HyperDriveExperimentResponse.from_dict(hyper_drive_experiment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


