# Actor

The actor of a Drive activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator** | **object** | Empty message representing an administrator. | [optional] 
**anonymous** | **object** | Empty message representing an anonymous user or indicating the authenticated user should be anonymized. | [optional] 
**impersonation** | [**Impersonation**](Impersonation.md) |  | [optional] 
**system** | [**SystemEvent**](SystemEvent.md) |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

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


