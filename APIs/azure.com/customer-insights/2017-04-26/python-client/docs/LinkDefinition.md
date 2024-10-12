# LinkDefinition

The definition of Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **Dict[str, str]** | Localized descriptions for the Link. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name for the Link. | [optional] 
**link_name** | **str** | The link name. | [optional] [readonly] 
**mappings** | [**List[TypePropertiesMapping]**](TypePropertiesMapping.md) | The set of properties mappings between the source and target Types. | [optional] 
**operation_type** | **str** | Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only. | [optional] 
**participant_property_references** | [**List[ParticipantPropertyReference]**](ParticipantPropertyReference.md) | The properties that represent the participating profile. | 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**reference_only** | **bool** | Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles. | [optional] 
**source_entity_type** | **str** | Type of source entity. | 
**source_entity_type_name** | **str** | Name of the source Entity Type. | 
**target_entity_type** | **str** | Type of target entity. | 
**target_entity_type_name** | **str** | Name of the target Entity Type. | 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.link_definition import LinkDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of LinkDefinition from a JSON string
link_definition_instance = LinkDefinition.from_json(json)
# print the JSON string representation of the object
print(LinkDefinition.to_json())

# convert the object into a dict
link_definition_dict = link_definition_instance.to_dict()
# create an instance of LinkDefinition from a dict
link_definition_from_dict = LinkDefinition.from_dict(link_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


