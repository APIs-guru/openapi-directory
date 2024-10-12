# ReorderIssueResolutionsRequest

Change the order of issue resolutions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | The ID of the resolution. Required if &#x60;position&#x60; isn&#39;t provided. | [optional] 
**ids** | **List[str]** | The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID. | 
**position** | **str** | The position for issue resolutions to be moved to. Required if &#x60;after&#x60; isn&#39;t provided. | [optional] 

## Example

```python
from openapi_client.models.reorder_issue_resolutions_request import ReorderIssueResolutionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderIssueResolutionsRequest from a JSON string
reorder_issue_resolutions_request_instance = ReorderIssueResolutionsRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderIssueResolutionsRequest.to_json())

# convert the object into a dict
reorder_issue_resolutions_request_dict = reorder_issue_resolutions_request_instance.to_dict()
# create an instance of ReorderIssueResolutionsRequest from a dict
reorder_issue_resolutions_request_from_dict = ReorderIssueResolutionsRequest.from_dict(reorder_issue_resolutions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


