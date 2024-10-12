# BulkIssuePropertyUpdateRequest

Bulk issue property update request details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are &#x60;issue&#x60; and &#x60;user&#x60;. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored. | [optional] 
**filter** | [**IssueFilterForBulkPropertySet**](IssueFilterForBulkPropertySet.md) | The bulk operation filter. | [optional] 
**value** | **object** | The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. | [optional] 

## Example

```python
from openapi_client.models.bulk_issue_property_update_request import BulkIssuePropertyUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkIssuePropertyUpdateRequest from a JSON string
bulk_issue_property_update_request_instance = BulkIssuePropertyUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BulkIssuePropertyUpdateRequest.to_json())

# convert the object into a dict
bulk_issue_property_update_request_dict = bulk_issue_property_update_request_instance.to_dict()
# create an instance of BulkIssuePropertyUpdateRequest from a dict
bulk_issue_property_update_request_from_dict = BulkIssuePropertyUpdateRequest.from_dict(bulk_issue_property_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


