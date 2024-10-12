# EntityUserLink

JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**EntityUserLinkEntity**](EntityUserLinkEntity.md) |  | [optional] 
**id** | **str** | Entity user link ID | [optional] 
**kind** | **str** | Resource type for entity user link. | [optional] [default to 'analytics#entityUserLink']
**permissions** | [**EntityUserLinkPermissions**](EntityUserLinkPermissions.md) |  | [optional] 
**self_link** | **str** | Self link for this resource. | [optional] 
**user_ref** | [**UserRef**](UserRef.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_user_link import EntityUserLink

# TODO update the JSON string below
json = "{}"
# create an instance of EntityUserLink from a JSON string
entity_user_link_instance = EntityUserLink.from_json(json)
# print the JSON string representation of the object
print(EntityUserLink.to_json())

# convert the object into a dict
entity_user_link_dict = entity_user_link_instance.to_dict()
# create an instance of EntityUserLink from a dict
entity_user_link_from_dict = EntityUserLink.from_dict(entity_user_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


