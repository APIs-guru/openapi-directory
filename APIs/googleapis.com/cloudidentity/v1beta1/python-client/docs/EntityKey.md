# EntityKey

A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the entity. For Google-managed entities, the &#x60;id&#x60; must be the email address of an existing group or user. For external-identity-mapped entities, the &#x60;id&#x60; must be a string conforming to the Identity Source&#39;s requirements. Must be unique within a &#x60;namespace&#x60;. | [optional] 
**namespace** | **str** | The namespace in which the entity exists. If not specified, the &#x60;EntityKey&#x60; represents a Google-managed entity such as a Google user or a Google Group. If specified, the &#x60;EntityKey&#x60; represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of &#x60;identitysources/{identity_source_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.entity_key import EntityKey

# TODO update the JSON string below
json = "{}"
# create an instance of EntityKey from a JSON string
entity_key_instance = EntityKey.from_json(json)
# print the JSON string representation of the object
print(EntityKey.to_json())

# convert the object into a dict
entity_key_dict = entity_key_instance.to_dict()
# create an instance of EntityKey from a dict
entity_key_from_dict = EntityKey.from_dict(entity_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


