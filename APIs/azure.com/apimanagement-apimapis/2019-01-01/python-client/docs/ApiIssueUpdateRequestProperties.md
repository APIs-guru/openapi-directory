# ApiIssueUpdateRequestProperties

Issue contract Update Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Text describing the issue. | [optional] 
**title** | **str** | The issue title. | [optional] 
**user_id** | **str** | A resource identifier for the user created the issue. | [optional] 

## Example

```python
from openapi_client.models.api_issue_update_request_properties import ApiIssueUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueUpdateRequestProperties from a JSON string
api_issue_update_request_properties_instance = ApiIssueUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiIssueUpdateRequestProperties.to_json())

# convert the object into a dict
api_issue_update_request_properties_dict = api_issue_update_request_properties_instance.to_dict()
# create an instance of ApiIssueUpdateRequestProperties from a dict
api_issue_update_request_properties_from_dict = ApiIssueUpdateRequestProperties.from_dict(api_issue_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


