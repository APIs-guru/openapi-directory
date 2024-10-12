# PolicyCollection

The response of the list policy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[PolicyContract]**](PolicyContract.md) | Policy Contract value. | [optional] 

## Example

```python
from openapi_client.models.policy_collection import PolicyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyCollection from a JSON string
policy_collection_instance = PolicyCollection.from_json(json)
# print the JSON string representation of the object
print(PolicyCollection.to_json())

# convert the object into a dict
policy_collection_dict = policy_collection_instance.to_dict()
# create an instance of PolicyCollection from a dict
policy_collection_from_dict = PolicyCollection.from_dict(policy_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


