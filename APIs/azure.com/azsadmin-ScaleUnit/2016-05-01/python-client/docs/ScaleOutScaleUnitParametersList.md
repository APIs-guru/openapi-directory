# ScaleOutScaleUnitParametersList

A list of input data that allows for adding a set of scale unit nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**await_storage_convergence** | **bool** | Flag indicates if the operation should wait for storage to converge before returning. | [optional] 
**node_list** | [**List[ScaleOutScaleUnitParameters]**](ScaleOutScaleUnitParameters.md) | List of nodes in the scale unit. | [optional] 

## Example

```python
from openapi_client.models.scale_out_scale_unit_parameters_list import ScaleOutScaleUnitParametersList

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleOutScaleUnitParametersList from a JSON string
scale_out_scale_unit_parameters_list_instance = ScaleOutScaleUnitParametersList.from_json(json)
# print the JSON string representation of the object
print(ScaleOutScaleUnitParametersList.to_json())

# convert the object into a dict
scale_out_scale_unit_parameters_list_dict = scale_out_scale_unit_parameters_list_instance.to_dict()
# create an instance of ScaleOutScaleUnitParametersList from a dict
scale_out_scale_unit_parameters_list_from_dict = ScaleOutScaleUnitParametersList.from_dict(scale_out_scale_unit_parameters_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


