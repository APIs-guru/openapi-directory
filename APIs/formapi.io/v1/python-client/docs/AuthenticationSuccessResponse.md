# AuthenticationSuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 

## Example

```python
from openapi_client.models.authentication_success_response import AuthenticationSuccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationSuccessResponse from a JSON string
authentication_success_response_instance = AuthenticationSuccessResponse.from_json(json)
# print the JSON string representation of the object
print(AuthenticationSuccessResponse.to_json())

# convert the object into a dict
authentication_success_response_dict = authentication_success_response_instance.to_dict()
# create an instance of AuthenticationSuccessResponse from a dict
authentication_success_response_from_dict = AuthenticationSuccessResponse.from_dict(authentication_success_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


