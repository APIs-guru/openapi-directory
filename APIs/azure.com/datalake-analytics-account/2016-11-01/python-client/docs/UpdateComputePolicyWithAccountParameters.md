# UpdateComputePolicyWithAccountParameters

The parameters used to update a compute policy while updating a Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the compute policy to update. | 
**properties** | [**UpdateComputePolicyProperties**](UpdateComputePolicyProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_compute_policy_with_account_parameters import UpdateComputePolicyWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateComputePolicyWithAccountParameters from a JSON string
update_compute_policy_with_account_parameters_instance = UpdateComputePolicyWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateComputePolicyWithAccountParameters.to_json())

# convert the object into a dict
update_compute_policy_with_account_parameters_dict = update_compute_policy_with_account_parameters_instance.to_dict()
# create an instance of UpdateComputePolicyWithAccountParameters from a dict
update_compute_policy_with_account_parameters_from_dict = UpdateComputePolicyWithAccountParameters.from_dict(update_compute_policy_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


