# ApiIssueUpdateRequest

Issue update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiIssueUpdateRequestProperties**](ApiIssueUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_issue_update_request import ApiIssueUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueUpdateRequest from a JSON string
api_issue_update_request_instance = ApiIssueUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiIssueUpdateRequest.to_json())

# convert the object into a dict
api_issue_update_request_dict = api_issue_update_request_instance.to_dict()
# create an instance of ApiIssueUpdateRequest from a dict
api_issue_update_request_from_dict = ApiIssueUpdateRequest.from_dict(api_issue_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


