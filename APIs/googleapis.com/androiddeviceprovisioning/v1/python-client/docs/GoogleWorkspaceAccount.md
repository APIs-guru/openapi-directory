# GoogleWorkspaceAccount

A Google Workspace customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Required. The customer ID. | [optional] 
**pre_provisioning_tokens** | **List[str]** | Output only. The pre-provisioning tokens previously used to claim devices. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_workspace_account import GoogleWorkspaceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleWorkspaceAccount from a JSON string
google_workspace_account_instance = GoogleWorkspaceAccount.from_json(json)
# print the JSON string representation of the object
print(GoogleWorkspaceAccount.to_json())

# convert the object into a dict
google_workspace_account_dict = google_workspace_account_instance.to_dict()
# create an instance of GoogleWorkspaceAccount from a dict
google_workspace_account_from_dict = GoogleWorkspaceAccount.from_dict(google_workspace_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


