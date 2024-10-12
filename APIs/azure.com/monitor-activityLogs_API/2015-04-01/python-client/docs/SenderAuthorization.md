# SenderAuthorization

the authorization used by the user who has performed the operation that led to this event. This captures the RBAC properties of the event. These usually include the 'action', 'role' and the 'scope'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | the permissible actions. For instance: microsoft.support/supporttickets/write | [optional] 
**role** | **str** | the role of the user. For instance: Subscription Admin | [optional] 
**scope** | **str** | the scope. | [optional] 

## Example

```python
from openapi_client.models.sender_authorization import SenderAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of SenderAuthorization from a JSON string
sender_authorization_instance = SenderAuthorization.from_json(json)
# print the JSON string representation of the object
print(SenderAuthorization.to_json())

# convert the object into a dict
sender_authorization_dict = sender_authorization_instance.to_dict()
# create an instance of SenderAuthorization from a dict
sender_authorization_from_dict = SenderAuthorization.from_dict(sender_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


