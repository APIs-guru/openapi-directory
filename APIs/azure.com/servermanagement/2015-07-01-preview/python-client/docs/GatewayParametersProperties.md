# GatewayParametersProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_upgrade** | **str** | The autoUpgrade property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume autoUpgrade &#x3D; Off. | [optional] 

## Example

```python
from openapi_client.models.gateway_parameters_properties import GatewayParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayParametersProperties from a JSON string
gateway_parameters_properties_instance = GatewayParametersProperties.from_json(json)
# print the JSON string representation of the object
print(GatewayParametersProperties.to_json())

# convert the object into a dict
gateway_parameters_properties_dict = gateway_parameters_properties_instance.to_dict()
# create an instance of GatewayParametersProperties from a dict
gateway_parameters_properties_from_dict = GatewayParametersProperties.from_dict(gateway_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


