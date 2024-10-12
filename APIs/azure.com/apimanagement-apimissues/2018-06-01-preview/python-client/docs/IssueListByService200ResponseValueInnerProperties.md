# IssueListByService200ResponseValueInnerProperties

Issue contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Text describing the issue. | 
**title** | **str** | The issue title. | 
**user_id** | **str** | A resource identifier for the user created the issue. | 

## Example

```python
from openapi_client.models.issue_list_by_service200_response_value_inner_properties import IssueListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueListByService200ResponseValueInnerProperties from a JSON string
issue_list_by_service200_response_value_inner_properties_instance = IssueListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(IssueListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
issue_list_by_service200_response_value_inner_properties_dict = issue_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of IssueListByService200ResponseValueInnerProperties from a dict
issue_list_by_service200_response_value_inner_properties_from_dict = IssueListByService200ResponseValueInnerProperties.from_dict(issue_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


