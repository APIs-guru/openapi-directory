# CreateOrUpdateComputePolicyProperties

The compute policy properties to use when creating a new compute policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_degree_of_parallelism_per_job** | **int** | The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed. | [optional] 
**min_priority_per_job** | **int** | The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed. | [optional] 
**object_id** | **str** | The AAD object identifier for the entity to create a policy for. | 
**object_type** | **str** | The type of AAD object the object identifier refers to. | 

## Example

```python
from openapi_client.models.create_or_update_compute_policy_properties import CreateOrUpdateComputePolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateComputePolicyProperties from a JSON string
create_or_update_compute_policy_properties_instance = CreateOrUpdateComputePolicyProperties.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateComputePolicyProperties.to_json())

# convert the object into a dict
create_or_update_compute_policy_properties_dict = create_or_update_compute_policy_properties_instance.to_dict()
# create an instance of CreateOrUpdateComputePolicyProperties from a dict
create_or_update_compute_policy_properties_from_dict = CreateOrUpdateComputePolicyProperties.from_dict(create_or_update_compute_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


