# OrderOfIssueTypes

An ordered list of issue type IDs and information about where to move them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | The ID of the issue type to place the moved issue types after. Required if &#x60;position&#x60; isn&#39;t provided. | [optional] 
**issue_type_ids** | **List[str]** | A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move. | 
**position** | **str** | The position the issue types should be moved to. Required if &#x60;after&#x60; isn&#39;t provided. | [optional] 

## Example

```python
from openapi_client.models.order_of_issue_types import OrderOfIssueTypes

# TODO update the JSON string below
json = "{}"
# create an instance of OrderOfIssueTypes from a JSON string
order_of_issue_types_instance = OrderOfIssueTypes.from_json(json)
# print the JSON string representation of the object
print(OrderOfIssueTypes.to_json())

# convert the object into a dict
order_of_issue_types_dict = order_of_issue_types_instance.to_dict()
# create an instance of OrderOfIssueTypes from a dict
order_of_issue_types_from_dict = OrderOfIssueTypes.from_dict(order_of_issue_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


