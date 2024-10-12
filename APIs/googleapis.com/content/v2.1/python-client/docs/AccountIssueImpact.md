# AccountIssueImpact

Overall impact of the issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakdowns** | [**List[Breakdown]**](Breakdown.md) | Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details. | [optional] 
**message** | **str** | Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: \&quot;Disapproves 90k offers in 25 countries\&quot; | [optional] 
**severity** | **str** | The severity of the issue. | [optional] 

## Example

```python
from openapi_client.models.account_issue_impact import AccountIssueImpact

# TODO update the JSON string below
json = "{}"
# create an instance of AccountIssueImpact from a JSON string
account_issue_impact_instance = AccountIssueImpact.from_json(json)
# print the JSON string representation of the object
print(AccountIssueImpact.to_json())

# convert the object into a dict
account_issue_impact_dict = account_issue_impact_instance.to_dict()
# create an instance of AccountIssueImpact from a dict
account_issue_impact_from_dict = AccountIssueImpact.from_dict(account_issue_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


