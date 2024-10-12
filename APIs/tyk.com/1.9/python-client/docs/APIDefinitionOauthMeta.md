# APIDefinitionOauthMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_access_types** | **List[str]** |  | [optional] 
**allowed_authorize_types** | **List[str]** |  | [optional] 
**auth_login_redirect** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_oauth_meta import APIDefinitionOauthMeta

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionOauthMeta from a JSON string
api_definition_oauth_meta_instance = APIDefinitionOauthMeta.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionOauthMeta.to_json())

# convert the object into a dict
api_definition_oauth_meta_dict = api_definition_oauth_meta_instance.to_dict()
# create an instance of APIDefinitionOauthMeta from a dict
api_definition_oauth_meta_from_dict = APIDefinitionOauthMeta.from_dict(api_definition_oauth_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


