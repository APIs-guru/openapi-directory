# RemoteIssueLinkIdentifies

Details of the identifiers for a created or updated remote issue link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the remote issue link, such as the ID of the item on the remote system. | [optional] [readonly] 
**var_self** | **str** | The URL of the remote issue link. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remote_issue_link_identifies import RemoteIssueLinkIdentifies

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteIssueLinkIdentifies from a JSON string
remote_issue_link_identifies_instance = RemoteIssueLinkIdentifies.from_json(json)
# print the JSON string representation of the object
print(RemoteIssueLinkIdentifies.to_json())

# convert the object into a dict
remote_issue_link_identifies_dict = remote_issue_link_identifies_instance.to_dict()
# create an instance of RemoteIssueLinkIdentifies from a dict
remote_issue_link_identifies_from_dict = RemoteIssueLinkIdentifies.from_dict(remote_issue_link_identifies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


