# PolicyRequest1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**name** | **str** | User-friendly policy name | 
**owner** | **bool** | Whether policy applies to resource owner or not | 
**priority** | **int** | Policy priority | 
**resources** | **List[str]** | List of resources to apply policy to | 
**roles** | **List[str]** | List of roles to apply policy to | 

## Example

```python
from openapi_client.models.policy_request1 import PolicyRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyRequest1 from a JSON string
policy_request1_instance = PolicyRequest1.from_json(json)
# print the JSON string representation of the object
print(PolicyRequest1.to_json())

# convert the object into a dict
policy_request1_dict = policy_request1_instance.to_dict()
# create an instance of PolicyRequest1 from a dict
policy_request1_from_dict = PolicyRequest1.from_dict(policy_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


