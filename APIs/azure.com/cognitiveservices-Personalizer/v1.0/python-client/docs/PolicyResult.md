# PolicyResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**summary** | [**List[PolicyResultSummary]**](PolicyResultSummary.md) |  | [optional] [readonly] 
**total_summary** | [**PolicyResultSummary**](PolicyResultSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_result import PolicyResult

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyResult from a JSON string
policy_result_instance = PolicyResult.from_json(json)
# print the JSON string representation of the object
print(PolicyResult.to_json())

# convert the object into a dict
policy_result_dict = policy_result_instance.to_dict()
# create an instance of PolicyResult from a dict
policy_result_from_dict = PolicyResult.from_dict(policy_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


