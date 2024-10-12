# IssueUpdateContractProperties

Issue contract Update Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Text describing the issue. | [optional] 
**title** | **str** | The issue title. | [optional] 
**user_id** | **str** | A resource identifier for the user created the issue. | [optional] 
**api_id** | **str** | A resource identifier for the API the issue was created for. | [optional] 
**created_date** | **datetime** | Date and time when the issue was created. | [optional] 
**state** | **str** | Status of the issue. | [optional] 

## Example

```python
from openapi_client.models.issue_update_contract_properties import IssueUpdateContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueUpdateContractProperties from a JSON string
issue_update_contract_properties_instance = IssueUpdateContractProperties.from_json(json)
# print the JSON string representation of the object
print(IssueUpdateContractProperties.to_json())

# convert the object into a dict
issue_update_contract_properties_dict = issue_update_contract_properties_instance.to_dict()
# create an instance of IssueUpdateContractProperties from a dict
issue_update_contract_properties_from_dict = IssueUpdateContractProperties.from_dict(issue_update_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


