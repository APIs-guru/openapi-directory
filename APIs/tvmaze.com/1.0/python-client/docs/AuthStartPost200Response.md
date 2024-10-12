# AuthStartPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirm_url** | **str** | URL where the user can confirm the authentication request | [optional] 
**token** | **str** | Authentication token to use in the &#x60;poll&#x60; endpoint | [optional] 

## Example

```python
from openapi_client.models.auth_start_post200_response import AuthStartPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthStartPost200Response from a JSON string
auth_start_post200_response_instance = AuthStartPost200Response.from_json(json)
# print the JSON string representation of the object
print(AuthStartPost200Response.to_json())

# convert the object into a dict
auth_start_post200_response_dict = auth_start_post200_response_instance.to_dict()
# create an instance of AuthStartPost200Response from a dict
auth_start_post200_response_from_dict = AuthStartPost200Response.from_dict(auth_start_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


