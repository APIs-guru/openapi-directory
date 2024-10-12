# WorkspaceProperties

Workspace properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | This is a read-only property. Represents the ID associated with the workspace. | [optional] [readonly] 
**portal_url** | **str** | This is a legacy property and is not used anymore. Kept here for backward compatibility. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the workspace. | [optional] 
**retention_in_days** | **int** | The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**source** | **str** | This is a read-only legacy property. It is always set to &#39;Azure&#39; by the service. Kept here for backward compatibility. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workspace_properties import WorkspaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceProperties from a JSON string
workspace_properties_instance = WorkspaceProperties.from_json(json)
# print the JSON string representation of the object
print(WorkspaceProperties.to_json())

# convert the object into a dict
workspace_properties_dict = workspace_properties_instance.to_dict()
# create an instance of WorkspaceProperties from a dict
workspace_properties_from_dict = WorkspaceProperties.from_dict(workspace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


