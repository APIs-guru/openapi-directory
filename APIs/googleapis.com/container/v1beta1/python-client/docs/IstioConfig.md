# IstioConfig

Configuration options for Istio addon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | **str** | The specified Istio auth mode, either none, or mutual TLS. | [optional] 
**disabled** | **bool** | Whether Istio is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.istio_config import IstioConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IstioConfig from a JSON string
istio_config_instance = IstioConfig.from_json(json)
# print the JSON string representation of the object
print(IstioConfig.to_json())

# convert the object into a dict
istio_config_dict = istio_config_instance.to_dict()
# create an instance of IstioConfig from a dict
istio_config_from_dict = IstioConfig.from_dict(istio_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


