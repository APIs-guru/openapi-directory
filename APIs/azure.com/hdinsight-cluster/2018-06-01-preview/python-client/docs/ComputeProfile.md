# ComputeProfile

Describes the compute profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | [**List[Role]**](Role.md) | The list of roles in the cluster. | [optional] 

## Example

```python
from openapi_client.models.compute_profile import ComputeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeProfile from a JSON string
compute_profile_instance = ComputeProfile.from_json(json)
# print the JSON string representation of the object
print(ComputeProfile.to_json())

# convert the object into a dict
compute_profile_dict = compute_profile_instance.to_dict()
# create an instance of ComputeProfile from a dict
compute_profile_from_dict = ComputeProfile.from_dict(compute_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


