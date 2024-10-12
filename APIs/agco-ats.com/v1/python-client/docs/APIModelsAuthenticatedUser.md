# APIModelsAuthenticatedUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email address | [optional] 
**macid** | **str** | The MAC identifier to use for API access | [optional] 
**mac_token** | **str** | The MAC token to use for API access | [optional] 
**name** | **str** | The user&#39;s name | [optional] 
**token** | **str** | The token to use for API access | [optional] 
**user_id** | **int** | The user ID | [optional] 
**username** | **str** | The username used for authentication | [optional] 

## Example

```python
from openapi_client.models.api_models_authenticated_user import APIModelsAuthenticatedUser

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsAuthenticatedUser from a JSON string
api_models_authenticated_user_instance = APIModelsAuthenticatedUser.from_json(json)
# print the JSON string representation of the object
print(APIModelsAuthenticatedUser.to_json())

# convert the object into a dict
api_models_authenticated_user_dict = api_models_authenticated_user_instance.to_dict()
# create an instance of APIModelsAuthenticatedUser from a dict
api_models_authenticated_user_from_dict = APIModelsAuthenticatedUser.from_dict(api_models_authenticated_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


