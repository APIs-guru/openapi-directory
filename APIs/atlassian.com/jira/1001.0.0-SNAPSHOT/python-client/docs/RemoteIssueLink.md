# RemoteIssueLink

Details of an issue remote link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Application**](Application.md) | Details of the remote application the linked item is in. | [optional] 
**global_id** | **str** | The global ID of the link, such as the ID of the item on the remote system. | [optional] 
**id** | **int** | The ID of the link. | [optional] 
**object** | [**RemoteObject**](RemoteObject.md) | Details of the item linked to. | [optional] 
**relationship** | **str** | Description of the relationship between the issue and the linked item. | [optional] 
**var_self** | **str** | The URL of the link. | [optional] 

## Example

```python
from openapi_client.models.remote_issue_link import RemoteIssueLink

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteIssueLink from a JSON string
remote_issue_link_instance = RemoteIssueLink.from_json(json)
# print the JSON string representation of the object
print(RemoteIssueLink.to_json())

# convert the object into a dict
remote_issue_link_dict = remote_issue_link_instance.to_dict()
# create an instance of RemoteIssueLink from a dict
remote_issue_link_from_dict = RemoteIssueLink.from_dict(remote_issue_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


