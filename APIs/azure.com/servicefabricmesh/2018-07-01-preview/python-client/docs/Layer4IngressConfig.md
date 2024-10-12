# Layer4IngressConfig

Describes the layer4 configuration for public connectivity for this network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The application name which contains the service to be exposed. | [optional] 
**endpoint_name** | **str** | The service endpoint that needs to be exposed. | [optional] 
**name** | **str** | Layer4 ingress config name. | [optional] 
**public_port** | **int** | Specifies the public port at which the service endpoint below needs to be exposed. | [optional] 
**service_name** | **str** | The service whose endpoint needs to be exposed at the public port. | [optional] 

## Example

```python
from openapi_client.models.layer4_ingress_config import Layer4IngressConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Layer4IngressConfig from a JSON string
layer4_ingress_config_instance = Layer4IngressConfig.from_json(json)
# print the JSON string representation of the object
print(Layer4IngressConfig.to_json())

# convert the object into a dict
layer4_ingress_config_dict = layer4_ingress_config_instance.to_dict()
# create an instance of Layer4IngressConfig from a dict
layer4_ingress_config_from_dict = Layer4IngressConfig.from_dict(layer4_ingress_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


