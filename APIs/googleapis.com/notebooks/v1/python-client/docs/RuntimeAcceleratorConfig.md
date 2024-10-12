# RuntimeAcceleratorConfig

Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_count** | **str** | Count of cores of this accelerator. | [optional] 
**type** | **str** | Accelerator model. | [optional] 

## Example

```python
from openapi_client.models.runtime_accelerator_config import RuntimeAcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeAcceleratorConfig from a JSON string
runtime_accelerator_config_instance = RuntimeAcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeAcceleratorConfig.to_json())

# convert the object into a dict
runtime_accelerator_config_dict = runtime_accelerator_config_instance.to_dict()
# create an instance of RuntimeAcceleratorConfig from a dict
runtime_accelerator_config_from_dict = RuntimeAcceleratorConfig.from_dict(runtime_accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


