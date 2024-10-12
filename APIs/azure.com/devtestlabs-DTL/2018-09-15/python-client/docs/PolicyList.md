# PolicyList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Policy]**](Policy.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.policy_list import PolicyList

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyList from a JSON string
policy_list_instance = PolicyList.from_json(json)
# print the JSON string representation of the object
print(PolicyList.to_json())

# convert the object into a dict
policy_list_dict = policy_list_instance.to_dict()
# create an instance of PolicyList from a dict
policy_list_from_dict = PolicyList.from_dict(policy_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


