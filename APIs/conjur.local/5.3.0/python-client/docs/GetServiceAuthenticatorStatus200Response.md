# GetServiceAuthenticatorStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | The error message if there was an error | [optional] 
**status** | **str** | The status of the endpoint, &#39;error&#39; if there was an error | 

## Example

```python
from openapi_client.models.get_service_authenticator_status200_response import GetServiceAuthenticatorStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetServiceAuthenticatorStatus200Response from a JSON string
get_service_authenticator_status200_response_instance = GetServiceAuthenticatorStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetServiceAuthenticatorStatus200Response.to_json())

# convert the object into a dict
get_service_authenticator_status200_response_dict = get_service_authenticator_status200_response_instance.to_dict()
# create an instance of GetServiceAuthenticatorStatus200Response from a dict
get_service_authenticator_status200_response_from_dict = GetServiceAuthenticatorStatus200Response.from_dict(get_service_authenticator_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


