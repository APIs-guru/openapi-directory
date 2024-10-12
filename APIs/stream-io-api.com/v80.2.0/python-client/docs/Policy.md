# Policy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **int** |  | 
**created_at** | **datetime** |  | 
**name** | **str** |  | 
**owner** | **bool** |  | 
**priority** | **int** |  | 
**resources** | **List[str]** |  | 
**roles** | **List[str]** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.policy import Policy

# TODO update the JSON string below
json = "{}"
# create an instance of Policy from a JSON string
policy_instance = Policy.from_json(json)
# print the JSON string representation of the object
print(Policy.to_json())

# convert the object into a dict
policy_dict = policy_instance.to_dict()
# create an instance of Policy from a dict
policy_from_dict = Policy.from_dict(policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


