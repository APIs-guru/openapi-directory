# DirectoryChromeosdevicesIssueCommandResponse

A response for issuing a command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_id** | **str** | The unique ID of the issued command, used to retrieve the command status. | [optional] 

## Example

```python
from openapi_client.models.directory_chromeosdevices_issue_command_response import DirectoryChromeosdevicesIssueCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryChromeosdevicesIssueCommandResponse from a JSON string
directory_chromeosdevices_issue_command_response_instance = DirectoryChromeosdevicesIssueCommandResponse.from_json(json)
# print the JSON string representation of the object
print(DirectoryChromeosdevicesIssueCommandResponse.to_json())

# convert the object into a dict
directory_chromeosdevices_issue_command_response_dict = directory_chromeosdevices_issue_command_response_instance.to_dict()
# create an instance of DirectoryChromeosdevicesIssueCommandResponse from a dict
directory_chromeosdevices_issue_command_response_from_dict = DirectoryChromeosdevicesIssueCommandResponse.from_dict(directory_chromeosdevices_issue_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


