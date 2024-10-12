# ScaleOutScaleUnitParameters

Input data that allows for adding a scale unit node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bmc_ipv4_address** | **str** | BMC address of the physical machine. | [optional] 
**computer_name** | **str** | Computer name of the physical machine. | [optional] 

## Example

```python
from openapi_client.models.scale_out_scale_unit_parameters import ScaleOutScaleUnitParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleOutScaleUnitParameters from a JSON string
scale_out_scale_unit_parameters_instance = ScaleOutScaleUnitParameters.from_json(json)
# print the JSON string representation of the object
print(ScaleOutScaleUnitParameters.to_json())

# convert the object into a dict
scale_out_scale_unit_parameters_dict = scale_out_scale_unit_parameters_instance.to_dict()
# create an instance of ScaleOutScaleUnitParameters from a dict
scale_out_scale_unit_parameters_from_dict = ScaleOutScaleUnitParameters.from_dict(scale_out_scale_unit_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


