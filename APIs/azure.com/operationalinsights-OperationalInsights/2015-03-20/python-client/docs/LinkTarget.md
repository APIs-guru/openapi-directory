# LinkTarget

Metadata for a workspace that isn't linked to an Azure subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The display name of the workspace. | [optional] 
**customer_id** | **str** | The GUID that uniquely identifies the workspace.  | [optional] 
**location** | **str** | The location of the workspace. | [optional] 
**workspace_name** | **str** | The DNS valid workspace name. | [optional] 

## Example

```python
from openapi_client.models.link_target import LinkTarget

# TODO update the JSON string below
json = "{}"
# create an instance of LinkTarget from a JSON string
link_target_instance = LinkTarget.from_json(json)
# print the JSON string representation of the object
print(LinkTarget.to_json())

# convert the object into a dict
link_target_dict = link_target_instance.to_dict()
# create an instance of LinkTarget from a dict
link_target_from_dict = LinkTarget.from_dict(link_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


