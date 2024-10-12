# IssueContractBaseProperties

Issue contract Base Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | A resource identifier for the API the issue was created for. | [optional] 
**created_date** | **datetime** | Date and time when the issue was created. | [optional] 
**state** | **str** | Status of the issue. | [optional] 

## Example

```python
from openapi_client.models.issue_contract_base_properties import IssueContractBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueContractBaseProperties from a JSON string
issue_contract_base_properties_instance = IssueContractBaseProperties.from_json(json)
# print the JSON string representation of the object
print(IssueContractBaseProperties.to_json())

# convert the object into a dict
issue_contract_base_properties_dict = issue_contract_base_properties_instance.to_dict()
# create an instance of IssueContractBaseProperties from a dict
issue_contract_base_properties_from_dict = IssueContractBaseProperties.from_dict(issue_contract_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


