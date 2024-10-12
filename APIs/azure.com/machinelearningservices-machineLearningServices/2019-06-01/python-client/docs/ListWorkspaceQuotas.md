# ListWorkspaceQuotas

The List WorkspaceQuotasByVMFamily operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of workspace quota information by VM Family. Call ListNext() with this to fetch the next page of Workspace Quota information. | [optional] [readonly] 
**value** | [**List[ResourceQuota]**](ResourceQuota.md) | The list of Workspace Quotas by VM Family | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_workspace_quotas import ListWorkspaceQuotas

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkspaceQuotas from a JSON string
list_workspace_quotas_instance = ListWorkspaceQuotas.from_json(json)
# print the JSON string representation of the object
print(ListWorkspaceQuotas.to_json())

# convert the object into a dict
list_workspace_quotas_dict = list_workspace_quotas_instance.to_dict()
# create an instance of ListWorkspaceQuotas from a dict
list_workspace_quotas_from_dict = ListWorkspaceQuotas.from_dict(list_workspace_quotas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


