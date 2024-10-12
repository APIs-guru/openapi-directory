# ListIdpCredentialsResponse

Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idp_credentials** | [**List[IdpCredential]**](IdpCredential.md) | The IdpCredentials from the specified InboundSamlSsoProfile. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_idp_credentials_response import ListIdpCredentialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListIdpCredentialsResponse from a JSON string
list_idp_credentials_response_instance = ListIdpCredentialsResponse.from_json(json)
# print the JSON string representation of the object
print(ListIdpCredentialsResponse.to_json())

# convert the object into a dict
list_idp_credentials_response_dict = list_idp_credentials_response_instance.to_dict()
# create an instance of ListIdpCredentialsResponse from a dict
list_idp_credentials_response_from_dict = ListIdpCredentialsResponse.from_dict(list_idp_credentials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


