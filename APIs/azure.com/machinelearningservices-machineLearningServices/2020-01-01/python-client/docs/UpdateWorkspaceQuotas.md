# UpdateWorkspaceQuotas

The properties for update Quota response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**limit** | **int** | The maximum permitted quota of the resource. | [optional] 
**status** | **str** | Status of update workspace quota. | [optional] 
**type** | **str** | Specifies the resource type. | [optional] [readonly] 
**unit** | **str** | An enum describing the unit of quota measurement. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_workspace_quotas import UpdateWorkspaceQuotas

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkspaceQuotas from a JSON string
update_workspace_quotas_instance = UpdateWorkspaceQuotas.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkspaceQuotas.to_json())

# convert the object into a dict
update_workspace_quotas_dict = update_workspace_quotas_instance.to_dict()
# create an instance of UpdateWorkspaceQuotas from a dict
update_workspace_quotas_from_dict = UpdateWorkspaceQuotas.from_dict(update_workspace_quotas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


