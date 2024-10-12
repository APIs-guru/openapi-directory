# VnetParameters

The required set of inputs to validate a VNET

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | VnetParameters resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vnet_parameters import VnetParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VnetParameters from a JSON string
vnet_parameters_instance = VnetParameters.from_json(json)
# print the JSON string representation of the object
print(VnetParameters.to_json())

# convert the object into a dict
vnet_parameters_dict = vnet_parameters_instance.to_dict()
# create an instance of VnetParameters from a dict
vnet_parameters_from_dict = VnetParameters.from_dict(vnet_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


