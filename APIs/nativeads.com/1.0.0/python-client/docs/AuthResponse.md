# AuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.auth_response import AuthResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthResponse from a JSON string
auth_response_instance = AuthResponse.from_json(json)
# print the JSON string representation of the object
print(AuthResponse.to_json())

# convert the object into a dict
auth_response_dict = auth_response_instance.to_dict()
# create an instance of AuthResponse from a dict
auth_response_from_dict = AuthResponse.from_dict(auth_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


