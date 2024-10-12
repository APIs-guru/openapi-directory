# UniqueKeyPolicy

The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unique_keys** | [**List[UniqueKey]**](UniqueKey.md) | List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. | [optional] 

## Example

```python
from openapi_client.models.unique_key_policy import UniqueKeyPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of UniqueKeyPolicy from a JSON string
unique_key_policy_instance = UniqueKeyPolicy.from_json(json)
# print the JSON string representation of the object
print(UniqueKeyPolicy.to_json())

# convert the object into a dict
unique_key_policy_dict = unique_key_policy_instance.to_dict()
# create an instance of UniqueKeyPolicy from a dict
unique_key_policy_from_dict = UniqueKeyPolicy.from_dict(unique_key_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


