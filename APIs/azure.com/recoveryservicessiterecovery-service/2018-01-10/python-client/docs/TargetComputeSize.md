# TargetComputeSize

Represents applicable recovery vm sizes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Id. | [optional] 
**name** | **str** | The name. | [optional] 
**properties** | [**TargetComputeSizeProperties**](TargetComputeSizeProperties.md) |  | [optional] 
**type** | **str** | The Type of the object. | [optional] 

## Example

```python
from openapi_client.models.target_compute_size import TargetComputeSize

# TODO update the JSON string below
json = "{}"
# create an instance of TargetComputeSize from a JSON string
target_compute_size_instance = TargetComputeSize.from_json(json)
# print the JSON string representation of the object
print(TargetComputeSize.to_json())

# convert the object into a dict
target_compute_size_dict = target_compute_size_instance.to_dict()
# create an instance of TargetComputeSize from a dict
target_compute_size_from_dict = TargetComputeSize.from_dict(target_compute_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


