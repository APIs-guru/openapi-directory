# SourceControlSecurityTokenProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The access token. | [optional] 
**refresh_token** | **str** | The refresh token. | [optional] 
**token_type** | **str** | The token type. Must be either PersonalAccessToken or Oauth. | [optional] 

## Example

```python
from openapi_client.models.source_control_security_token_properties import SourceControlSecurityTokenProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSecurityTokenProperties from a JSON string
source_control_security_token_properties_instance = SourceControlSecurityTokenProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlSecurityTokenProperties.to_json())

# convert the object into a dict
source_control_security_token_properties_dict = source_control_security_token_properties_instance.to_dict()
# create an instance of SourceControlSecurityTokenProperties from a dict
source_control_security_token_properties_from_dict = SourceControlSecurityTokenProperties.from_dict(source_control_security_token_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


