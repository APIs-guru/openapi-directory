# ApiIssueListByService200ResponseValueInnerProperties

Issue contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Text describing the issue. | 
**title** | **str** | The issue title. | 
**user_id** | **str** | A resource identifier for the user created the issue. | 

## Example

```python
from openapi_client.models.api_issue_list_by_service200_response_value_inner_properties import ApiIssueListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueListByService200ResponseValueInnerProperties from a JSON string
api_issue_list_by_service200_response_value_inner_properties_instance = ApiIssueListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiIssueListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_issue_list_by_service200_response_value_inner_properties_dict = api_issue_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiIssueListByService200ResponseValueInnerProperties from a dict
api_issue_list_by_service200_response_value_inner_properties_from_dict = ApiIssueListByService200ResponseValueInnerProperties.from_dict(api_issue_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


