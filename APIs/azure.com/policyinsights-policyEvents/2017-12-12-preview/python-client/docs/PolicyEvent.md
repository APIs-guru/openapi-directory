# PolicyEvent

Policy event record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_context** | **str** | OData context string; used by OData clients to resolve type information based on metadata. | [optional] 
**odata_id** | **str** | OData entity ID; always set to null since policy event records do not have an entity ID. | [optional] 
**effective_parameters** | **str** | Effective parameters for the policy assignment. | [optional] 
**is_compliant** | **bool** | Flag which states whether the resource is compliant against the policy assignment it was evaluated against. | [optional] 
**management_group_ids** | **str** | Comma separated list of management group IDs, which represent the hierarchy of the management groups the resource is under. | [optional] 
**policy_assignment_id** | **str** | Policy assignment ID. | [optional] 
**policy_assignment_name** | **str** | Policy assignment name. | [optional] 
**policy_assignment_owner** | **str** | Policy assignment owner. | [optional] 
**policy_assignment_parameters** | **str** | Policy assignment parameters. | [optional] 
**policy_assignment_scope** | **str** | Policy assignment scope. | [optional] 
**policy_definition_action** | **str** | Policy definition action, i.e. effect. | [optional] 
**policy_definition_category** | **str** | Policy definition category. | [optional] 
**policy_definition_id** | **str** | Policy definition ID. | [optional] 
**policy_definition_name** | **str** | Policy definition name. | [optional] 
**policy_definition_reference_id** | **str** | Reference ID for the policy definition inside the policy set, if the policy assignment is for a policy set. | [optional] 
**policy_set_definition_category** | **str** | Policy set definition category, if the policy assignment is for a policy set. | [optional] 
**policy_set_definition_id** | **str** | Policy set definition ID, if the policy assignment is for a policy set. | [optional] 
**policy_set_definition_name** | **str** | Policy set definition name, if the policy assignment is for a policy set. | [optional] 
**policy_set_definition_owner** | **str** | Policy set definition owner, if the policy assignment is for a policy set. | [optional] 
**policy_set_definition_parameters** | **str** | Policy set definition parameters, if the policy assignment is for a policy set. | [optional] 
**principal_oid** | **str** | Principal object ID for the user who initiated the resource operation that triggered the policy event. | [optional] 
**resource_group** | **str** | Resource group name. | [optional] 
**resource_id** | **str** | Resource ID. | [optional] 
**resource_location** | **str** | Resource location. | [optional] 
**resource_tags** | **str** | List of resource tags. | [optional] 
**resource_type** | **str** | Resource type. | [optional] 
**subscription_id** | **str** | Subscription ID. | [optional] 
**tenant_id** | **str** | Tenant ID for the policy event record. | [optional] 
**timestamp** | **datetime** | Timestamp for the policy event record. | [optional] 

## Example

```python
from openapi_client.models.policy_event import PolicyEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyEvent from a JSON string
policy_event_instance = PolicyEvent.from_json(json)
# print the JSON string representation of the object
print(PolicyEvent.to_json())

# convert the object into a dict
policy_event_dict = policy_event_instance.to_dict()
# create an instance of PolicyEvent from a dict
policy_event_from_dict = PolicyEvent.from_dict(policy_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


