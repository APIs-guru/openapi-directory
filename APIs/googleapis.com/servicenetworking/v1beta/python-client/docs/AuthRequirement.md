# AuthRequirement

User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audiences** | **str** | NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components. The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience \&quot;https://Service_name/API_name\&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience \&quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService\&quot;. Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com | [optional] 
**provider_id** | **str** | id from authentication provider. Example: provider_id: bookstore_auth | [optional] 

## Example

```python
from openapi_client.models.auth_requirement import AuthRequirement

# TODO update the JSON string below
json = "{}"
# create an instance of AuthRequirement from a JSON string
auth_requirement_instance = AuthRequirement.from_json(json)
# print the JSON string representation of the object
print(AuthRequirement.to_json())

# convert the object into a dict
auth_requirement_dict = auth_requirement_instance.to_dict()
# create an instance of AuthRequirement from a dict
auth_requirement_from_dict = AuthRequirement.from_dict(auth_requirement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


