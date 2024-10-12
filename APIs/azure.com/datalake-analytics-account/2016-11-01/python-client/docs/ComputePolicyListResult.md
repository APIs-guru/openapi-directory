# ComputePolicyListResult

The list of compute policies in the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ComputePolicy]**](ComputePolicy.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_policy_list_result import ComputePolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ComputePolicyListResult from a JSON string
compute_policy_list_result_instance = ComputePolicyListResult.from_json(json)
# print the JSON string representation of the object
print(ComputePolicyListResult.to_json())

# convert the object into a dict
compute_policy_list_result_dict = compute_policy_list_result_instance.to_dict()
# create an instance of ComputePolicyListResult from a dict
compute_policy_list_result_from_dict = ComputePolicyListResult.from_dict(compute_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


