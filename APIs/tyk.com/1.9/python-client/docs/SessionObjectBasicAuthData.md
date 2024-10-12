# SessionObjectBasicAuthData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash_type** | **str** |  | [optional] 
**password** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.session_object_basic_auth_data import SessionObjectBasicAuthData

# TODO update the JSON string below
json = "{}"
# create an instance of SessionObjectBasicAuthData from a JSON string
session_object_basic_auth_data_instance = SessionObjectBasicAuthData.from_json(json)
# print the JSON string representation of the object
print(SessionObjectBasicAuthData.to_json())

# convert the object into a dict
session_object_basic_auth_data_dict = session_object_basic_auth_data_instance.to_dict()
# create an instance of SessionObjectBasicAuthData from a dict
session_object_basic_auth_data_from_dict = SessionObjectBasicAuthData.from_dict(session_object_basic_auth_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


