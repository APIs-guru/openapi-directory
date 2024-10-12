# WhoAmI200Response

Information about the client making a request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The account attribute of the client provided access token. | [optional] 
**client_ip** | **str** | The request client IP address as determined by Conjur. This same IP address appears in application logs and audit logs. | [optional] 
**token_issued_at** | **str** | The issued timestamp, that is, when the provided access token was created (iat field in the JWT) | [optional] 
**user_agent** | **str** | The incoming request HTTP user agent header. | [optional] 
**username** | **str** | The username attribute of the provided access token. | [optional] 

## Example

```python
from openapi_client.models.who_am_i200_response import WhoAmI200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WhoAmI200Response from a JSON string
who_am_i200_response_instance = WhoAmI200Response.from_json(json)
# print the JSON string representation of the object
print(WhoAmI200Response.to_json())

# convert the object into a dict
who_am_i200_response_dict = who_am_i200_response_instance.to_dict()
# create an instance of WhoAmI200Response from a dict
who_am_i200_response_from_dict = WhoAmI200Response.from_dict(who_am_i200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


