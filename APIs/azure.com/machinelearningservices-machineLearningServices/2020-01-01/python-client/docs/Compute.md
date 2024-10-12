# Compute

Machine Learning compute object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_location** | **str** | Location for the underlying compute | [optional] 
**compute_type** | [**ComputeType**](ComputeType.md) |  | 
**created_on** | **datetime** | The date and time when the compute was created. | [optional] [readonly] 
**description** | **str** | The description of the Machine Learning compute. | [optional] 
**is_attached_compute** | **bool** | Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false. | [optional] [readonly] 
**modified_on** | **datetime** | The date and time when the compute was last modified. | [optional] [readonly] 
**provisioning_errors** | [**List[MachineLearningServiceError]**](MachineLearningServiceError.md) | Errors during provisioning | [optional] [readonly] 
**provisioning_state** | **str** | The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed. | [optional] [readonly] 
**resource_id** | **str** | ARM resource id of the underlying compute | [optional] 

## Example

```python
from openapi_client.models.compute import Compute

# TODO update the JSON string below
json = "{}"
# create an instance of Compute from a JSON string
compute_instance = Compute.from_json(json)
# print the JSON string representation of the object
print(Compute.to_json())

# convert the object into a dict
compute_dict = compute_instance.to_dict()
# create an instance of Compute from a dict
compute_from_dict = Compute.from_dict(compute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


