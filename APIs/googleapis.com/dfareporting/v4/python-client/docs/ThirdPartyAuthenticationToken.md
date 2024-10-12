# ThirdPartyAuthenticationToken

Third Party Authentication Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the third-party authentication token. | [optional] 
**value** | **str** | Value of the third-party authentication token. This is a read-only, auto-generated field. | [optional] 

## Example

```python
from openapi_client.models.third_party_authentication_token import ThirdPartyAuthenticationToken

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyAuthenticationToken from a JSON string
third_party_authentication_token_instance = ThirdPartyAuthenticationToken.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyAuthenticationToken.to_json())

# convert the object into a dict
third_party_authentication_token_dict = third_party_authentication_token_instance.to_dict()
# create an instance of ThirdPartyAuthenticationToken from a dict
third_party_authentication_token_from_dict = ThirdPartyAuthenticationToken.from_dict(third_party_authentication_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


