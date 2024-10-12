# PolicyInfo

The IAM policy and its attached resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attached_resource** | **str** | The full resource name the policy is directly attached to. | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_info import PolicyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyInfo from a JSON string
policy_info_instance = PolicyInfo.from_json(json)
# print the JSON string representation of the object
print(PolicyInfo.to_json())

# convert the object into a dict
policy_info_dict = policy_info_instance.to_dict()
# create an instance of PolicyInfo from a dict
policy_info_from_dict = PolicyInfo.from_dict(policy_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


