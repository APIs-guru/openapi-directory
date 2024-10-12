# IssueFilterForBulkPropertySet

Bulk operation filter details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **object** | The value of properties to perform the bulk operation on. | [optional] 
**entity_ids** | **List[int]** | List of issues to perform the bulk operation on. | [optional] 
**has_property** | **bool** | Whether the bulk operation occurs only when the property is present on or absent from an issue. | [optional] 

## Example

```python
from openapi_client.models.issue_filter_for_bulk_property_set import IssueFilterForBulkPropertySet

# TODO update the JSON string below
json = "{}"
# create an instance of IssueFilterForBulkPropertySet from a JSON string
issue_filter_for_bulk_property_set_instance = IssueFilterForBulkPropertySet.from_json(json)
# print the JSON string representation of the object
print(IssueFilterForBulkPropertySet.to_json())

# convert the object into a dict
issue_filter_for_bulk_property_set_dict = issue_filter_for_bulk_property_set_instance.to_dict()
# create an instance of IssueFilterForBulkPropertySet from a dict
issue_filter_for_bulk_property_set_from_dict = IssueFilterForBulkPropertySet.from_dict(issue_filter_for_bulk_property_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


