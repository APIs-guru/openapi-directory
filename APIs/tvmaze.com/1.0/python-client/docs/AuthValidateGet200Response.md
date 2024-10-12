# AuthValidateGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**premium** | **int** | The user&#39;s premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none | [optional] 

## Example

```python
from openapi_client.models.auth_validate_get200_response import AuthValidateGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthValidateGet200Response from a JSON string
auth_validate_get200_response_instance = AuthValidateGet200Response.from_json(json)
# print the JSON string representation of the object
print(AuthValidateGet200Response.to_json())

# convert the object into a dict
auth_validate_get200_response_dict = auth_validate_get200_response_instance.to_dict()
# create an instance of AuthValidateGet200Response from a dict
auth_validate_get200_response_from_dict = AuthValidateGet200Response.from_dict(auth_validate_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


