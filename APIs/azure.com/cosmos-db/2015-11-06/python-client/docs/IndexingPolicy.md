# IndexingPolicy

Cosmos DB indexing policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic** | **bool** | Indicates if the indexing policy is automatic | [optional] 
**excluded_paths** | [**List[ExcludedPath]**](ExcludedPath.md) | List of paths to exclude from indexing | [optional] 
**included_paths** | [**List[IncludedPath]**](IncludedPath.md) | List of paths to include in the indexing | [optional] 
**indexing_mode** | **str** | Indicates the indexing mode. | [optional] [default to 'Consistent']

## Example

```python
from openapi_client.models.indexing_policy import IndexingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IndexingPolicy from a JSON string
indexing_policy_instance = IndexingPolicy.from_json(json)
# print the JSON string representation of the object
print(IndexingPolicy.to_json())

# convert the object into a dict
indexing_policy_dict = indexing_policy_instance.to_dict()
# create an instance of IndexingPolicy from a dict
indexing_policy_from_dict = IndexingPolicy.from_dict(indexing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


