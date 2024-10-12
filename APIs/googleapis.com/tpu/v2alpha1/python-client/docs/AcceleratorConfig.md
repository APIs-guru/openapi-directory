# AcceleratorConfig

A TPU accelerator configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topology** | **str** | Required. Topology of TPU in chips. | [optional] 
**type** | **str** | Required. Type of TPU. | [optional] 

## Example

```python
from openapi_client.models.accelerator_config import AcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AcceleratorConfig from a JSON string
accelerator_config_instance = AcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(AcceleratorConfig.to_json())

# convert the object into a dict
accelerator_config_dict = accelerator_config_instance.to_dict()
# create an instance of AcceleratorConfig from a dict
accelerator_config_from_dict = AcceleratorConfig.from_dict(accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


