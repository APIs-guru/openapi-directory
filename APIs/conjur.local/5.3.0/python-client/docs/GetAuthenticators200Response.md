# GetAuthenticators200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configured** | **List[str]** | The authenticators configured on the Conjur server | [optional] 
**enabled** | **List[str]** | The authenticators enabled on the Conjur server | [optional] 
**installed** | **List[str]** | The authenticators installed on the Conjur server | [optional] 

## Example

```python
from openapi_client.models.get_authenticators200_response import GetAuthenticators200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAuthenticators200Response from a JSON string
get_authenticators200_response_instance = GetAuthenticators200Response.from_json(json)
# print the JSON string representation of the object
print(GetAuthenticators200Response.to_json())

# convert the object into a dict
get_authenticators200_response_dict = get_authenticators200_response_instance.to_dict()
# create an instance of GetAuthenticators200Response from a dict
get_authenticators200_response_from_dict = GetAuthenticators200Response.from_dict(get_authenticators200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


