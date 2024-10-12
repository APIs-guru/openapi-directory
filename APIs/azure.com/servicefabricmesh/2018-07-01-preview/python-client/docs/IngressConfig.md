# IngressConfig

Describes public connectivity configuration for the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layer4** | [**List[Layer4IngressConfig]**](Layer4IngressConfig.md) | Configuration for layer4 public connectivity for this network. | [optional] 
**public_ip_address** | **str** | The public IP address for reaching this network. | [optional] [readonly] 
**qos_level** | **str** | The QoS tier for ingress. | [optional] 

## Example

```python
from openapi_client.models.ingress_config import IngressConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IngressConfig from a JSON string
ingress_config_instance = IngressConfig.from_json(json)
# print the JSON string representation of the object
print(IngressConfig.to_json())

# convert the object into a dict
ingress_config_dict = ingress_config_instance.to_dict()
# create an instance of IngressConfig from a dict
ingress_config_from_dict = IngressConfig.from_dict(ingress_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


