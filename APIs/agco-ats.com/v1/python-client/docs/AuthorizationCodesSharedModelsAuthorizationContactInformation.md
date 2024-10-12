# AuthorizationCodesSharedModelsAuthorizationContactInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code_id** | **int** | AuthorizationCode ID that the contact information ties into. | 
**code** | **str** | The authorization code. Read Only. | [optional] 
**contact** | **str** | Name of contact requesting an authorization code. Minimum length of 3 characters. | 
**created_by** | **str** | The name of the user that created this code. Read Only. | [optional] 
**created_date** | **datetime** | The date the authorization code was created. | [optional] 
**dealer_code** | **str** | Dealer code that relates to the dealership. Minimum length of 3 characters. | 
**dealership** | **str** | Name of dealership. Minimum length of 3 characters. | 
**definition_name** | **str** | The name of the definition used for generating this authorization code. Read Only. | [optional] 
**email** | **str** | Email of contact. | [optional] 
**id** | **int** | ID of authorizationContactInformation | [optional] 
**notes** | **str** | Optional notes used for internal use. | [optional] 
**phone** | **str** | Phone number of contact. | 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_authorization_contact_information import AuthorizationCodesSharedModelsAuthorizationContactInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsAuthorizationContactInformation from a JSON string
authorization_codes_shared_models_authorization_contact_information_instance = AuthorizationCodesSharedModelsAuthorizationContactInformation.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsAuthorizationContactInformation.to_json())

# convert the object into a dict
authorization_codes_shared_models_authorization_contact_information_dict = authorization_codes_shared_models_authorization_contact_information_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsAuthorizationContactInformation from a dict
authorization_codes_shared_models_authorization_contact_information_from_dict = AuthorizationCodesSharedModelsAuthorizationContactInformation.from_dict(authorization_codes_shared_models_authorization_contact_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


