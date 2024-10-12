# ResourceType

The resource type definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_unauthorized_actions** | **List[str]** | The allowed unauthorized actions. | [optional] 
**api_profiles** | [**ApiProfileList**](ApiProfileList.md) |  | [optional] 
**authorization_action_mappings** | [**AuthorizationActionMappingList**](AuthorizationActionMappingList.md) |  | [optional] 
**endpoints** | [**ResourceProviderEndpointList**](ResourceProviderEndpointList.md) |  | [optional] 
**in_global_location** | **bool** | A value indicating whether the resource type is in global location. | [optional] 
**linked_access_checks** | [**LinkedAccessCheckList**](LinkedAccessCheckList.md) |  | [optional] 
**linked_notification_rules** | [**LinkedNotificationRuleList**](LinkedNotificationRuleList.md) |  | [optional] 
**linked_operation_rules** | [**LinkedOperationRuleList**](LinkedOperationRuleList.md) |  | [optional] 
**marketplace_type** | [**MarketplaceType**](MarketplaceType.md) |  | [optional] 
**metered_resource_ids** | **List[str]** | The metered resource ids. | [optional] 
**name** | **str** | The name. | [optional] 
**resource_deletion_policy** | [**ResourceDeletionPolicy**](ResourceDeletionPolicy.md) |  | [optional] 
**routing_type** | [**RoutingType**](RoutingType.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_type import ResourceType

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceType from a JSON string
resource_type_instance = ResourceType.from_json(json)
# print the JSON string representation of the object
print(ResourceType.to_json())

# convert the object into a dict
resource_type_dict = resource_type_instance.to_dict()
# create an instance of ResourceType from a dict
resource_type_from_dict = ResourceType.from_dict(resource_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


