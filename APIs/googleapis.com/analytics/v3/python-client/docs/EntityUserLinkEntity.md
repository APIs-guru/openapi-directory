# EntityUserLinkEntity

Entity for this link. It can be an account, a web property, or a view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ref** | [**AccountRef**](AccountRef.md) |  | [optional] 
**profile_ref** | [**ProfileRef**](ProfileRef.md) |  | [optional] 
**web_property_ref** | [**WebPropertyRef**](WebPropertyRef.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_user_link_entity import EntityUserLinkEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EntityUserLinkEntity from a JSON string
entity_user_link_entity_instance = EntityUserLinkEntity.from_json(json)
# print the JSON string representation of the object
print(EntityUserLinkEntity.to_json())

# convert the object into a dict
entity_user_link_entity_dict = entity_user_link_entity_instance.to_dict()
# create an instance of EntityUserLinkEntity from a dict
entity_user_link_entity_from_dict = EntityUserLinkEntity.from_dict(entity_user_link_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


