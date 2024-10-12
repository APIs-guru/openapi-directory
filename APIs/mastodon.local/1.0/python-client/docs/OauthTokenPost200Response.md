# OauthTokenPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**created_at** | **int** | UNIX timestamp | [optional] 
**scope** | **str** |  | [optional] 
**token_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.oauth_token_post200_response import OauthTokenPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OauthTokenPost200Response from a JSON string
oauth_token_post200_response_instance = OauthTokenPost200Response.from_json(json)
# print the JSON string representation of the object
print(OauthTokenPost200Response.to_json())

# convert the object into a dict
oauth_token_post200_response_dict = oauth_token_post200_response_instance.to_dict()
# create an instance of OauthTokenPost200Response from a dict
oauth_token_post200_response_from_dict = OauthTokenPost200Response.from_dict(oauth_token_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


