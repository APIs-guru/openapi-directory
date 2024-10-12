# Actor

An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent. | [optional] 
**email** | **str** | The email address of the actor. If not provided, it is inferred from the credentials supplied during case creation. When a name is provided, an email must also be provided. If the user is a Google Support agent, this is obfuscated. This field is deprecated. Use **username** field instead. | [optional] 
**google_support** | **bool** | Output only. Whether the actor is a Google support actor. | [optional] [readonly] 
**username** | **str** | Output only. The username of the actor. It may look like an email or other format provided by the identity provider. If not provided, it is inferred from the credentials supplied. When a name is provided, a username must also be provided. If the user is a Google Support agent, this will not be set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.actor import Actor

# TODO update the JSON string below
json = "{}"
# create an instance of Actor from a JSON string
actor_instance = Actor.from_json(json)
# print the JSON string representation of the object
print(Actor.to_json())

# convert the object into a dict
actor_dict = actor_instance.to_dict()
# create an instance of Actor from a dict
actor_from_dict = Actor.from_dict(actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


