# RestDescriptionAuthOauth2

OAuth 2.0 authentication information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopes** | [**Dict[str, RestDescriptionAuthOauth2ScopesValue]**](RestDescriptionAuthOauth2ScopesValue.md) | Available OAuth 2.0 scopes. | [optional] 

## Example

```python
from openapi_client.models.rest_description_auth_oauth2 import RestDescriptionAuthOauth2

# TODO update the JSON string below
json = "{}"
# create an instance of RestDescriptionAuthOauth2 from a JSON string
rest_description_auth_oauth2_instance = RestDescriptionAuthOauth2.from_json(json)
# print the JSON string representation of the object
print(RestDescriptionAuthOauth2.to_json())

# convert the object into a dict
rest_description_auth_oauth2_dict = rest_description_auth_oauth2_instance.to_dict()
# create an instance of RestDescriptionAuthOauth2 from a dict
rest_description_auth_oauth2_from_dict = RestDescriptionAuthOauth2.from_dict(rest_description_auth_oauth2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


