# EntityObject

Describes all of the data being used to verify an entity. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[AddressObject]**](AddressObject.md) | Collection of address objects. | [optional] 
**date_of_birth** | [**DOBObject**](DOBObject.md) |  | [optional] 
**entity_id** | **str** | When an entity is first created, it is assigned an ID. When updating an entity, make sure you set the entityId One exception to this is when an entity is created from a document object. It is expected that this object would be passed into a /check or /entity call to set it.  | [optional] 
**entity_profile** | **str** | If the entity is using the new profiles feature, then their profile name will be found here.  Note: If setting a profile, you must ensure that the profile matches a known configuration.  Please contact Frankie developer support if you&#39;re unsure as to what valid values are.  | [optional] 
**entity_type** | [**EnumEntityType**](EnumEntityType.md) |  | [optional] 
**extra_data** | [**List[KeyValuePairObject]**](KeyValuePairObject.md) | Set of key-value pairs that provide arbitrary additional type-specific data. You can use these fields to store external IDs, or other non-identity related items if you need to. If updating an existing entity, then existing values with the same name will be overwritten. New values will be added.  See here for more information about possible values you can use:   https://apidocs.frankiefinancial.com/docs/entity-extradata-key-value-pairs  | [optional] 
**flags** | [**List[EntityFlagObject]**](EntityFlagObject.md) | Used to set additional information flags with regards to this entity and for ongoing processing.  Flags might include having the entity (not) participate in regular pep/sanctions screening Others will follow over time.  | [optional] 
**gender** | [**EnumGender**](EnumGender.md) |  | [optional] 
**identity_docs** | [**List[IdentityDocumentObject]**](IdentityDocumentObject.md) | Collection of identity documents (photos, scans, selfies, etc) | [optional] 
**name** | [**PersonalNameObject**](PersonalNameObject.md) |  | [optional] 
**organisation_data** | [**OrganisationDataObject**](OrganisationDataObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_object import EntityObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityObject from a JSON string
entity_object_instance = EntityObject.from_json(json)
# print the JSON string representation of the object
print(EntityObject.to_json())

# convert the object into a dict
entity_object_dict = entity_object_instance.to_dict()
# create an instance of EntityObject from a dict
entity_object_from_dict = EntityObject.from_dict(entity_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


