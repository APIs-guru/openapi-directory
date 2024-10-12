# AuthenticationMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_key** | **str** |  | [optional] 
**session** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.authentication_message import AuthenticationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationMessage from a JSON string
authentication_message_instance = AuthenticationMessage.from_json(json)
# print the JSON string representation of the object
print(AuthenticationMessage.to_json())

# convert the object into a dict
authentication_message_dict = authentication_message_instance.to_dict()
# create an instance of AuthenticationMessage from a dict
authentication_message_from_dict = AuthenticationMessage.from_dict(authentication_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


