# IssueFilterForBulkPropertyDelete

Bulk operation filter details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **object** | The value of properties to perform the bulk operation on. | [optional] 
**entity_ids** | **List[int]** | List of issues to perform the bulk delete operation on. | [optional] 

## Example

```python
from openapi_client.models.issue_filter_for_bulk_property_delete import IssueFilterForBulkPropertyDelete

# TODO update the JSON string below
json = "{}"
# create an instance of IssueFilterForBulkPropertyDelete from a JSON string
issue_filter_for_bulk_property_delete_instance = IssueFilterForBulkPropertyDelete.from_json(json)
# print the JSON string representation of the object
print(IssueFilterForBulkPropertyDelete.to_json())

# convert the object into a dict
issue_filter_for_bulk_property_delete_dict = issue_filter_for_bulk_property_delete_instance.to_dict()
# create an instance of IssueFilterForBulkPropertyDelete from a dict
issue_filter_for_bulk_property_delete_from_dict = IssueFilterForBulkPropertyDelete.from_dict(issue_filter_for_bulk_property_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


