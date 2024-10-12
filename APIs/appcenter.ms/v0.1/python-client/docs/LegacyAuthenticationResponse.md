# LegacyAuthenticationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticated** | **bool** | The authentication status of the user. | [optional] 

## Example

```python
from openapi_client.models.legacy_authentication_response import LegacyAuthenticationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAuthenticationResponse from a JSON string
legacy_authentication_response_instance = LegacyAuthenticationResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyAuthenticationResponse.to_json())

# convert the object into a dict
legacy_authentication_response_dict = legacy_authentication_response_instance.to_dict()
# create an instance of LegacyAuthenticationResponse from a dict
legacy_authentication_response_from_dict = LegacyAuthenticationResponse.from_dict(legacy_authentication_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


