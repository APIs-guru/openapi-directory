# IssueUpdateContract

Issue update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IssueUpdateContractProperties**](IssueUpdateContractProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.issue_update_contract import IssueUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of IssueUpdateContract from a JSON string
issue_update_contract_instance = IssueUpdateContract.from_json(json)
# print the JSON string representation of the object
print(IssueUpdateContract.to_json())

# convert the object into a dict
issue_update_contract_dict = issue_update_contract_instance.to_dict()
# create an instance of IssueUpdateContract from a dict
issue_update_contract_from_dict = IssueUpdateContract.from_dict(issue_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


