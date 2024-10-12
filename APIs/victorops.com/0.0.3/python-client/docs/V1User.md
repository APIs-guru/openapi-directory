# V1User

Some info about the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**password_last_updated** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**verified** | **bool** | Whether or not this user has set their password (will always be false) | [optional] 

## Example

```python
from openapi_client.models.v1_user import V1User

# TODO update the JSON string below
json = "{}"
# create an instance of V1User from a JSON string
v1_user_instance = V1User.from_json(json)
# print the JSON string representation of the object
print(V1User.to_json())

# convert the object into a dict
v1_user_dict = v1_user_instance.to_dict()
# create an instance of V1User from a dict
v1_user_from_dict = V1User.from_dict(v1_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


