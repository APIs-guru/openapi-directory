# AppWhitelistingIssueSummary

Represents a summary of the alerts of the VM/server group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue** | [**AppWhitelistingIssue**](AppWhitelistingIssue.md) |  | [optional] 
**number_of_vms** | **float** | The number of machines in the VM/server group that have this alert | [optional] 

## Example

```python
from openapi_client.models.app_whitelisting_issue_summary import AppWhitelistingIssueSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AppWhitelistingIssueSummary from a JSON string
app_whitelisting_issue_summary_instance = AppWhitelistingIssueSummary.from_json(json)
# print the JSON string representation of the object
print(AppWhitelistingIssueSummary.to_json())

# convert the object into a dict
app_whitelisting_issue_summary_dict = app_whitelisting_issue_summary_instance.to_dict()
# create an instance of AppWhitelistingIssueSummary from a dict
app_whitelisting_issue_summary_from_dict = AppWhitelistingIssueSummary.from_dict(app_whitelisting_issue_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


