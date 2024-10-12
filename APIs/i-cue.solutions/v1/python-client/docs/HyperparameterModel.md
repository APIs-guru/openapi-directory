# HyperparameterModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abc_classification_threshold_a** | **float** |  | [optional] 
**abc_classification_threshold_b** | **float** |  | [optional] 
**abc_classification_threshold_c** | **float** |  | [optional] 
**discard_data** | **bool** |  | [optional] 
**error_type** | **str** |  | [optional] 
**hold_out_period** | **int** |  | [optional] 
**no_fcst** | **int** |  | [optional] 
**outlier_detection** | **bool** |  | [optional] 
**periodicity** | **int** |  | [optional] 
**xyz_classification_threshold_x** | **float** |  | [optional] 
**xyz_classification_threshold_y** | **float** |  | [optional] 
**xyz_classification_threshold_z** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.hyperparameter_model import HyperparameterModel

# TODO update the JSON string below
json = "{}"
# create an instance of HyperparameterModel from a JSON string
hyperparameter_model_instance = HyperparameterModel.from_json(json)
# print the JSON string representation of the object
print(HyperparameterModel.to_json())

# convert the object into a dict
hyperparameter_model_dict = hyperparameter_model_instance.to_dict()
# create an instance of HyperparameterModel from a dict
hyperparameter_model_from_dict = HyperparameterModel.from_dict(hyperparameter_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


