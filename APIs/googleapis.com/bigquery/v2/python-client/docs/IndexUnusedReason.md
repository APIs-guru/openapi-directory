# IndexUnusedReason

Reason about why no search index was used in the search query (or sub-query).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_table** | [**TableReference**](TableReference.md) |  | [optional] 
**code** | **str** | Specifies the high-level reason for the scenario when no search index was used. | [optional] 
**index_name** | **str** | Specifies the name of the unused search index, if available. | [optional] 
**message** | **str** | Free form human-readable reason for the scenario when no search index was used. | [optional] 

## Example

```python
from openapi_client.models.index_unused_reason import IndexUnusedReason

# TODO update the JSON string below
json = "{}"
# create an instance of IndexUnusedReason from a JSON string
index_unused_reason_instance = IndexUnusedReason.from_json(json)
# print the JSON string representation of the object
print(IndexUnusedReason.to_json())

# convert the object into a dict
index_unused_reason_dict = index_unused_reason_instance.to_dict()
# create an instance of IndexUnusedReason from a dict
index_unused_reason_from_dict = IndexUnusedReason.from_dict(index_unused_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


