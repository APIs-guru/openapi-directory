# AccessTokenToPut

Container Class for the Put action of an Access Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **int** | The ID of the Card | [optional] 
**user_id** | **int** | The ID of the User. The credentials provided must have permission to edit the user.              If no ID is provided, the user in the credentials is taken. | [optional] 

## Example

```python
from openapi_client.models.access_token_to_put import AccessTokenToPut

# TODO update the JSON string below
json = "{}"
# create an instance of AccessTokenToPut from a JSON string
access_token_to_put_instance = AccessTokenToPut.from_json(json)
# print the JSON string representation of the object
print(AccessTokenToPut.to_json())

# convert the object into a dict
access_token_to_put_dict = access_token_to_put_instance.to_dict()
# create an instance of AccessTokenToPut from a dict
access_token_to_put_from_dict = AccessTokenToPut.from_dict(access_token_to_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


