# CreateComputePolicyWithAccountParameters

The parameters used to create a new compute policy while creating a new Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the compute policy to create. | 
**properties** | [**CreateOrUpdateComputePolicyProperties**](CreateOrUpdateComputePolicyProperties.md) |  | 

## Example

```python
from openapi_client.models.create_compute_policy_with_account_parameters import CreateComputePolicyWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateComputePolicyWithAccountParameters from a JSON string
create_compute_policy_with_account_parameters_instance = CreateComputePolicyWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(CreateComputePolicyWithAccountParameters.to_json())

# convert the object into a dict
create_compute_policy_with_account_parameters_dict = create_compute_policy_with_account_parameters_instance.to_dict()
# create an instance of CreateComputePolicyWithAccountParameters from a dict
create_compute_policy_with_account_parameters_from_dict = CreateComputePolicyWithAccountParameters.from_dict(create_compute_policy_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


