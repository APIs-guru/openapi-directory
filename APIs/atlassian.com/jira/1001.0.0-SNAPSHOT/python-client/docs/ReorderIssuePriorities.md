# ReorderIssuePriorities

Change the order of issue priorities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | The ID of the priority. Required if &#x60;position&#x60; isn&#39;t provided. | [optional] 
**ids** | **List[str]** | The list of issue IDs to be reordered. Cannot contain duplicates nor after ID. | 
**position** | **str** | The position for issue priorities to be moved to. Required if &#x60;after&#x60; isn&#39;t provided. | [optional] 

## Example

```python
from openapi_client.models.reorder_issue_priorities import ReorderIssuePriorities

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderIssuePriorities from a JSON string
reorder_issue_priorities_instance = ReorderIssuePriorities.from_json(json)
# print the JSON string representation of the object
print(ReorderIssuePriorities.to_json())

# convert the object into a dict
reorder_issue_priorities_dict = reorder_issue_priorities_instance.to_dict()
# create an instance of ReorderIssuePriorities from a dict
reorder_issue_priorities_from_dict = ReorderIssuePriorities.from_dict(reorder_issue_priorities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


