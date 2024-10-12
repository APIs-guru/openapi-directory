# RewindHyperparameterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_of_error** | **float** |  | [optional] 
**discard_data** | **bool** |  | [optional] 
**error_type** | **str** |  | [optional] 
**hold_out_period** | **int** |  | [optional] 
**no_fcst** | **int** |  | [optional] 
**periodicity** | **int** |  | [optional] 
**rewind_time_frame** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.rewind_hyperparameter_response import RewindHyperparameterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RewindHyperparameterResponse from a JSON string
rewind_hyperparameter_response_instance = RewindHyperparameterResponse.from_json(json)
# print the JSON string representation of the object
print(RewindHyperparameterResponse.to_json())

# convert the object into a dict
rewind_hyperparameter_response_dict = rewind_hyperparameter_response_instance.to_dict()
# create an instance of RewindHyperparameterResponse from a dict
rewind_hyperparameter_response_from_dict = RewindHyperparameterResponse.from_dict(rewind_hyperparameter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


