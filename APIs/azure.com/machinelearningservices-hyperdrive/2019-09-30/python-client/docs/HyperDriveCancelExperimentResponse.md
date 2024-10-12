# HyperDriveCancelExperimentResponse

Response for HyperDrive_CancelExperiment in case of success.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Response code. | 
**result** | **str** | Message indicating operation success. | 

## Example

```python
from openapi_client.models.hyper_drive_cancel_experiment_response import HyperDriveCancelExperimentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveCancelExperimentResponse from a JSON string
hyper_drive_cancel_experiment_response_instance = HyperDriveCancelExperimentResponse.from_json(json)
# print the JSON string representation of the object
print(HyperDriveCancelExperimentResponse.to_json())

# convert the object into a dict
hyper_drive_cancel_experiment_response_dict = hyper_drive_cancel_experiment_response_instance.to_dict()
# create an instance of HyperDriveCancelExperimentResponse from a dict
hyper_drive_cancel_experiment_response_from_dict = HyperDriveCancelExperimentResponse.from_dict(hyper_drive_cancel_experiment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


