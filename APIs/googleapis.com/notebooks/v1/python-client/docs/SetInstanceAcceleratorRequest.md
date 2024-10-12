# SetInstanceAcceleratorRequest

Request for setting instance accelerator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_count** | **str** | Required. Count of cores of this accelerator. Note that not all combinations of &#x60;type&#x60; and &#x60;core_count&#x60; are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. | [optional] 
**type** | **str** | Required. Type of this accelerator. | [optional] 

## Example

```python
from openapi_client.models.set_instance_accelerator_request import SetInstanceAcceleratorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetInstanceAcceleratorRequest from a JSON string
set_instance_accelerator_request_instance = SetInstanceAcceleratorRequest.from_json(json)
# print the JSON string representation of the object
print(SetInstanceAcceleratorRequest.to_json())

# convert the object into a dict
set_instance_accelerator_request_dict = set_instance_accelerator_request_instance.to_dict()
# create an instance of SetInstanceAcceleratorRequest from a dict
set_instance_accelerator_request_from_dict = SetInstanceAcceleratorRequest.from_dict(set_instance_accelerator_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


