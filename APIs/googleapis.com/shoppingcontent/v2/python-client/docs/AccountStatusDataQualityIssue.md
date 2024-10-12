# AccountStatusDataQualityIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** |  | [optional] 
**destination** | **str** |  | [optional] 
**detail** | **str** |  | [optional] 
**displayed_value** | **str** |  | [optional] 
**example_items** | [**List[AccountStatusExampleItem]**](AccountStatusExampleItem.md) |  | [optional] 
**id** | **str** |  | [optional] 
**last_checked** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**num_items** | **int** |  | [optional] 
**severity** | **str** |  Acceptable values are: - \&quot;&#x60;critical&#x60;\&quot; - \&quot;&#x60;error&#x60;\&quot; - \&quot;&#x60;suggestion&#x60;\&quot;  | [optional] 
**submitted_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_status_data_quality_issue import AccountStatusDataQualityIssue

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatusDataQualityIssue from a JSON string
account_status_data_quality_issue_instance = AccountStatusDataQualityIssue.from_json(json)
# print the JSON string representation of the object
print(AccountStatusDataQualityIssue.to_json())

# convert the object into a dict
account_status_data_quality_issue_dict = account_status_data_quality_issue_instance.to_dict()
# create an instance of AccountStatusDataQualityIssue from a dict
account_status_data_quality_issue_from_dict = AccountStatusDataQualityIssue.from_dict(account_status_data_quality_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


