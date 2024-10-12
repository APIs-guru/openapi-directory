# RetrievalImportance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**importance** | **str** | Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed. | [optional] 

## Example

```python
from openapi_client.models.retrieval_importance import RetrievalImportance

# TODO update the JSON string below
json = "{}"
# create an instance of RetrievalImportance from a JSON string
retrieval_importance_instance = RetrievalImportance.from_json(json)
# print the JSON string representation of the object
print(RetrievalImportance.to_json())

# convert the object into a dict
retrieval_importance_dict = retrieval_importance_instance.to_dict()
# create an instance of RetrievalImportance from a dict
retrieval_importance_from_dict = RetrievalImportance.from_dict(retrieval_importance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


