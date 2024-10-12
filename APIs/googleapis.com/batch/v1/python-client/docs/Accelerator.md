# Accelerator

Accelerator describes Compute Engine accelerators to be attached to the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of accelerators of this type. | [optional] 
**driver_version** | **str** | Optional. The NVIDIA GPU driver version that should be installed for this type. You can define the specific driver version such as \&quot;470.103.01\&quot;, following the driver version requirements in https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#minimum-driver. Batch will install the specific accelerator driver if qualified. | [optional] 
**install_gpu_drivers** | **bool** | Deprecated: please use instances[0].install_gpu_drivers instead. | [optional] 
**type** | **str** | The accelerator type. For example, \&quot;nvidia-tesla-t4\&quot;. See &#x60;gcloud compute accelerator-types list&#x60;. | [optional] 

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


