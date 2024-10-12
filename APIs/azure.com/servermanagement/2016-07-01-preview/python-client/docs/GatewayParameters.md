# GatewayParameters

Collection of parameters for operations on a gateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource. | [optional] 
**properties** | [**GatewayParametersProperties**](GatewayParametersProperties.md) |  | [optional] 
**tags** | **object** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.gateway_parameters import GatewayParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayParameters from a JSON string
gateway_parameters_instance = GatewayParameters.from_json(json)
# print the JSON string representation of the object
print(GatewayParameters.to_json())

# convert the object into a dict
gateway_parameters_dict = gateway_parameters_instance.to_dict()
# create an instance of GatewayParameters from a dict
gateway_parameters_from_dict = GatewayParameters.from_dict(gateway_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


