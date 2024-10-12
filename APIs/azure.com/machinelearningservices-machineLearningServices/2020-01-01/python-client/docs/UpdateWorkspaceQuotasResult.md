# UpdateWorkspaceQuotasResult

The result of update workspace quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of workspace quota update result. Call ListNext() with this to fetch the next page of Workspace Quota update result. | [optional] [readonly] 
**value** | [**List[UpdateWorkspaceQuotas]**](UpdateWorkspaceQuotas.md) | The list of workspace quota update result. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_workspace_quotas_result import UpdateWorkspaceQuotasResult

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkspaceQuotasResult from a JSON string
update_workspace_quotas_result_instance = UpdateWorkspaceQuotasResult.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkspaceQuotasResult.to_json())

# convert the object into a dict
update_workspace_quotas_result_dict = update_workspace_quotas_result_instance.to_dict()
# create an instance of UpdateWorkspaceQuotasResult from a dict
update_workspace_quotas_result_from_dict = UpdateWorkspaceQuotasResult.from_dict(update_workspace_quotas_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


