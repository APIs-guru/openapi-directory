# CreateOrganizationActionBatch201ResponseActionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | The operation to be used by this action | 
**resource** | **str** | Unique identifier for the resource to be acted on | 

## Example

```python
from openapi_client.models.create_organization_action_batch201_response_actions_inner import CreateOrganizationActionBatch201ResponseActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationActionBatch201ResponseActionsInner from a JSON string
create_organization_action_batch201_response_actions_inner_instance = CreateOrganizationActionBatch201ResponseActionsInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationActionBatch201ResponseActionsInner.to_json())

# convert the object into a dict
create_organization_action_batch201_response_actions_inner_dict = create_organization_action_batch201_response_actions_inner_instance.to_dict()
# create an instance of CreateOrganizationActionBatch201ResponseActionsInner from a dict
create_organization_action_batch201_response_actions_inner_from_dict = CreateOrganizationActionBatch201ResponseActionsInner.from_dict(create_organization_action_batch201_response_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


