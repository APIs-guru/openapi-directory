# HparamSearchSpaces

Hyperparameter search spaces. These should be a subset of training_options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_fn** | [**StringHparamSearchSpace**](StringHparamSearchSpace.md) |  | [optional] 
**batch_size** | [**IntHparamSearchSpace**](IntHparamSearchSpace.md) |  | [optional] 
**booster_type** | [**StringHparamSearchSpace**](StringHparamSearchSpace.md) |  | [optional] 
**colsample_bylevel** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**colsample_bynode** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**colsample_bytree** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**dart_normalize_type** | [**StringHparamSearchSpace**](StringHparamSearchSpace.md) |  | [optional] 
**dropout** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**hidden_units** | [**IntArrayHparamSearchSpace**](IntArrayHparamSearchSpace.md) |  | [optional] 
**l1_reg** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**l2_reg** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**learn_rate** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**max_tree_depth** | [**IntHparamSearchSpace**](IntHparamSearchSpace.md) |  | [optional] 
**min_split_loss** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**min_tree_child_weight** | [**IntHparamSearchSpace**](IntHparamSearchSpace.md) |  | [optional] 
**num_clusters** | [**IntHparamSearchSpace**](IntHparamSearchSpace.md) |  | [optional] 
**num_factors** | [**IntHparamSearchSpace**](IntHparamSearchSpace.md) |  | [optional] 
**num_parallel_tree** | [**IntHparamSearchSpace**](IntHparamSearchSpace.md) |  | [optional] 
**optimizer** | [**StringHparamSearchSpace**](StringHparamSearchSpace.md) |  | [optional] 
**subsample** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 
**tree_method** | [**StringHparamSearchSpace**](StringHparamSearchSpace.md) |  | [optional] 
**wals_alpha** | [**DoubleHparamSearchSpace**](DoubleHparamSearchSpace.md) |  | [optional] 

## Example

```python
from openapi_client.models.hparam_search_spaces import HparamSearchSpaces

# TODO update the JSON string below
json = "{}"
# create an instance of HparamSearchSpaces from a JSON string
hparam_search_spaces_instance = HparamSearchSpaces.from_json(json)
# print the JSON string representation of the object
print(HparamSearchSpaces.to_json())

# convert the object into a dict
hparam_search_spaces_dict = hparam_search_spaces_instance.to_dict()
# create an instance of HparamSearchSpaces from a dict
hparam_search_spaces_from_dict = HparamSearchSpaces.from_dict(hparam_search_spaces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


