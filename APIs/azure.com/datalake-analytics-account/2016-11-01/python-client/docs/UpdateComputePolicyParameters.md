# UpdateComputePolicyParameters

The parameters used to update a compute policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateComputePolicyProperties**](UpdateComputePolicyProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_compute_policy_parameters import UpdateComputePolicyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateComputePolicyParameters from a JSON string
update_compute_policy_parameters_instance = UpdateComputePolicyParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateComputePolicyParameters.to_json())

# convert the object into a dict
update_compute_policy_parameters_dict = update_compute_policy_parameters_instance.to_dict()
# create an instance of UpdateComputePolicyParameters from a dict
update_compute_policy_parameters_from_dict = UpdateComputePolicyParameters.from_dict(update_compute_policy_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


