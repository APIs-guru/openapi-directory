# CreateOrganizationActionBatchRequestActionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **object** | The body of the action | [optional] 
**operation** | **str** | The operation to be used | 
**resource** | **str** | Unique identifier for the resource to be acted on | 

## Example

```python
from openapi_client.models.create_organization_action_batch_request_actions_inner import CreateOrganizationActionBatchRequestActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationActionBatchRequestActionsInner from a JSON string
create_organization_action_batch_request_actions_inner_instance = CreateOrganizationActionBatchRequestActionsInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationActionBatchRequestActionsInner.to_json())

# convert the object into a dict
create_organization_action_batch_request_actions_inner_dict = create_organization_action_batch_request_actions_inner_instance.to_dict()
# create an instance of CreateOrganizationActionBatchRequestActionsInner from a dict
create_organization_action_batch_request_actions_inner_from_dict = CreateOrganizationActionBatchRequestActionsInner.from_dict(create_organization_action_batch_request_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


