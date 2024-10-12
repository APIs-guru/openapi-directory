# Accelerator

Carries information about an accelerator that can be attached to a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | How many accelerators of this type to attach. | [optional] 
**type** | **str** | The accelerator type string (for example, \&quot;nvidia-tesla-k80\&quot;). Only NVIDIA GPU accelerators are currently supported. If an NVIDIA GPU is attached, the required runtime libraries will be made available to all containers under &#x60;/usr/local/nvidia&#x60;. The driver version to install must be specified using the NVIDIA driver version parameter on the virtual machine specification. Note that attaching a GPU increases the worker VM startup time by a few minutes. | [optional] 

## Example

```python
from openapi_client.models.accelerator import Accelerator

# TODO update the JSON string below
json = "{}"
# create an instance of Accelerator from a JSON string
accelerator_instance = Accelerator.from_json(json)
# print the JSON string representation of the object
print(Accelerator.to_json())

# convert the object into a dict
accelerator_dict = accelerator_instance.to_dict()
# create an instance of Accelerator from a dict
accelerator_from_dict = Accelerator.from_dict(accelerator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


