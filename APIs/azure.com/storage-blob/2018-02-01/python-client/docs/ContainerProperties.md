# ContainerProperties

The properties of a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_immutability_policy** | **bool** | The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container. | [optional] [readonly] 
**has_legal_hold** | **bool** | The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold&#x3D;true for a given account. | [optional] [readonly] 
**immutability_policy** | [**ImmutabilityPolicyProperties**](ImmutabilityPolicyProperties.md) |  | [optional] 
**last_modified_time** | **datetime** | Returns the date and time the container was last modified. | [optional] [readonly] 
**lease_duration** | **str** | Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased. | [optional] [readonly] 
**lease_state** | **str** | Lease state of the container. | [optional] [readonly] 
**lease_status** | **str** | The lease status of the container. | [optional] [readonly] 
**legal_hold** | [**LegalHoldProperties**](LegalHoldProperties.md) |  | [optional] 
**metadata** | **Dict[str, str]** | A name-value pair to associate with the container as metadata. | [optional] 
**public_access** | **str** | Specifies whether data in the container may be accessed publicly and the level of access. | [optional] 

## Example

```python
from openapi_client.models.container_properties import ContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerProperties from a JSON string
container_properties_instance = ContainerProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerProperties.to_json())

# convert the object into a dict
container_properties_dict = container_properties_instance.to_dict()
# create an instance of ContainerProperties from a dict
container_properties_from_dict = ContainerProperties.from_dict(container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


