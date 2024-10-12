# AcceleratorConfig

An accelerator configuration for a VM instance Definition of a hardware accelerator. Note that there is no check on `type` and `core_count` combinations. TPUs are not supported. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_count** | **str** | Optional. Count of cores of this accelerator. | [optional] 
**type** | **str** | Optional. Type of this accelerator. | [optional] 

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


