# SchedulerAcceleratorConfig

Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_count** | **str** | Count of cores of this accelerator. | [optional] 
**type** | **str** | Type of this accelerator. | [optional] 

## Example

```python
from openapi_client.models.scheduler_accelerator_config import SchedulerAcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulerAcceleratorConfig from a JSON string
scheduler_accelerator_config_instance = SchedulerAcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(SchedulerAcceleratorConfig.to_json())

# convert the object into a dict
scheduler_accelerator_config_dict = scheduler_accelerator_config_instance.to_dict()
# create an instance of SchedulerAcceleratorConfig from a dict
scheduler_accelerator_config_from_dict = SchedulerAcceleratorConfig.from_dict(scheduler_accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


