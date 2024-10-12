# IssueCollection

Paged Issue list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[IssueContract]**](IssueContract.md) | Issue values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_collection import IssueCollection

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCollection from a JSON string
issue_collection_instance = IssueCollection.from_json(json)
# print the JSON string representation of the object
print(IssueCollection.to_json())

# convert the object into a dict
issue_collection_dict = issue_collection_instance.to_dict()
# create an instance of IssueCollection from a dict
issue_collection_from_dict = IssueCollection.from_dict(issue_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


