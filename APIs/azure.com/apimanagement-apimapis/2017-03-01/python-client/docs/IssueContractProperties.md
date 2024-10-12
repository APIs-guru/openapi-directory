# IssueContractProperties

Issue contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | A resource identifier for the API the issue was created for. | [optional] 
**created_date** | **datetime** | Date and time when the issue was created. | [optional] 
**description** | **str** | Text describing the issue. | 
**state** | **str** | Status of the issue. | [optional] 
**title** | **str** | The issue title. | 
**user_id** | **str** | A resource identifier for the user created the issue. | 

## Example

```python
from openapi_client.models.issue_contract_properties import IssueContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueContractProperties from a JSON string
issue_contract_properties_instance = IssueContractProperties.from_json(json)
# print the JSON string representation of the object
print(IssueContractProperties.to_json())

# convert the object into a dict
issue_contract_properties_dict = issue_contract_properties_instance.to_dict()
# create an instance of IssueContractProperties from a dict
issue_contract_properties_from_dict = IssueContractProperties.from_dict(issue_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


