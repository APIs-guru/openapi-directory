# ComputePolicyProperties

The compute policy properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_degree_of_parallelism_per_job** | **int** | The maximum degree of parallelism per job this user can use to submit jobs. | [optional] [readonly] 
**min_priority_per_job** | **int** | The minimum priority per job this user can use to submit jobs. | [optional] [readonly] 
**object_id** | **str** | The AAD object identifier for the entity to create a policy for. | [optional] [readonly] 
**object_type** | **str** | The type of AAD object the object identifier refers to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_policy_properties import ComputePolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ComputePolicyProperties from a JSON string
compute_policy_properties_instance = ComputePolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ComputePolicyProperties.to_json())

# convert the object into a dict
compute_policy_properties_dict = compute_policy_properties_instance.to_dict()
# create an instance of ComputePolicyProperties from a dict
compute_policy_properties_from_dict = ComputePolicyProperties.from_dict(compute_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


