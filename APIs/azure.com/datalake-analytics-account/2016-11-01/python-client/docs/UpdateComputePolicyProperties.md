# UpdateComputePolicyProperties

The compute policy properties to use when updating a compute policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_degree_of_parallelism_per_job** | **int** | The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed. | [optional] 
**min_priority_per_job** | **int** | The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed. | [optional] 
**object_id** | **str** | The AAD object identifier for the entity to create a policy for. | [optional] 
**object_type** | **str** | The type of AAD object the object identifier refers to. | [optional] 

## Example

```python
from openapi_client.models.update_compute_policy_properties import UpdateComputePolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateComputePolicyProperties from a JSON string
update_compute_policy_properties_instance = UpdateComputePolicyProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateComputePolicyProperties.to_json())

# convert the object into a dict
update_compute_policy_properties_dict = update_compute_policy_properties_instance.to_dict()
# create an instance of UpdateComputePolicyProperties from a dict
update_compute_policy_properties_from_dict = UpdateComputePolicyProperties.from_dict(update_compute_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


