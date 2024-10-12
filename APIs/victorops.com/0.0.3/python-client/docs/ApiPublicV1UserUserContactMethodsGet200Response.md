# ApiPublicV1UserUserContactMethodsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[ContactDevice]**](ContactDevice.md) |  | [optional] 
**emails** | [**List[UserContact]**](UserContact.md) |  | [optional] 
**phones** | [**List[UserContact]**](UserContact.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_public_v1_user_user_contact_methods_get200_response import ApiPublicV1UserUserContactMethodsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPublicV1UserUserContactMethodsGet200Response from a JSON string
api_public_v1_user_user_contact_methods_get200_response_instance = ApiPublicV1UserUserContactMethodsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiPublicV1UserUserContactMethodsGet200Response.to_json())

# convert the object into a dict
api_public_v1_user_user_contact_methods_get200_response_dict = api_public_v1_user_user_contact_methods_get200_response_instance.to_dict()
# create an instance of ApiPublicV1UserUserContactMethodsGet200Response from a dict
api_public_v1_user_user_contact_methods_get200_response_from_dict = ApiPublicV1UserUserContactMethodsGet200Response.from_dict(api_public_v1_user_user_contact_methods_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


