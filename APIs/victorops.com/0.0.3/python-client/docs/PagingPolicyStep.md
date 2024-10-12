# PagingPolicyStep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **float** |  | [optional] 
**rules** | [**List[PagingPolicyStepRule]**](PagingPolicyStepRule.md) |  | [optional] 
**timeout** | [**TimeoutType**](TimeoutType.md) |  | [optional] 

## Example

```python
from openapi_client.models.paging_policy_step import PagingPolicyStep

# TODO update the JSON string below
json = "{}"
# create an instance of PagingPolicyStep from a JSON string
paging_policy_step_instance = PagingPolicyStep.from_json(json)
# print the JSON string representation of the object
print(PagingPolicyStep.to_json())

# convert the object into a dict
paging_policy_step_dict = paging_policy_step_instance.to_dict()
# create an instance of PagingPolicyStep from a dict
paging_policy_step_from_dict = PagingPolicyStep.from_dict(paging_policy_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


