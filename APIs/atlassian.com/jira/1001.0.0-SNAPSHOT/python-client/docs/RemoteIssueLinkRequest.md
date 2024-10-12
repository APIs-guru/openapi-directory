# RemoteIssueLinkRequest

Details of a remote issue link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Application**](Application.md) | Details of the remote application the linked item is in. For example, trello. | [optional] 
**global_id** | **str** | An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: &#x60;appId&#x3D;456&amp;pageId&#x3D;123&#x60;.  Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record&#39;s Jira ID.  The maximum length is 255 characters. | [optional] 
**object** | [**RemoteObject**](RemoteObject.md) | Details of the item linked to. | 
**relationship** | **str** | Description of the relationship between the issue and the linked item. If not set, the relationship description \&quot;links to\&quot; is used in Jira. | [optional] 

## Example

```python
from openapi_client.models.remote_issue_link_request import RemoteIssueLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteIssueLinkRequest from a JSON string
remote_issue_link_request_instance = RemoteIssueLinkRequest.from_json(json)
# print the JSON string representation of the object
print(RemoteIssueLinkRequest.to_json())

# convert the object into a dict
remote_issue_link_request_dict = remote_issue_link_request_instance.to_dict()
# create an instance of RemoteIssueLinkRequest from a dict
remote_issue_link_request_from_dict = RemoteIssueLinkRequest.from_dict(remote_issue_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


