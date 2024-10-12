# SpectacularJWTObtain

Obtain new JWT pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Your access token | [optional] [readonly] 
**access_expires** | **int** | Access token expires in seconds | [optional] [readonly] [default to 86400]
**refresh** | **str** | Your refresh token | [optional] [readonly] 
**refresh_expires** | **int** | Refresh token expires in seconds | [optional] [readonly] [default to 2592000]

## Example

```python
from openapi_client.models.spectacular_jwt_obtain import SpectacularJWTObtain

# TODO update the JSON string below
json = "{}"
# create an instance of SpectacularJWTObtain from a JSON string
spectacular_jwt_obtain_instance = SpectacularJWTObtain.from_json(json)
# print the JSON string representation of the object
print(SpectacularJWTObtain.to_json())

# convert the object into a dict
spectacular_jwt_obtain_dict = spectacular_jwt_obtain_instance.to_dict()
# create an instance of SpectacularJWTObtain from a dict
spectacular_jwt_obtain_from_dict = SpectacularJWTObtain.from_dict(spectacular_jwt_obtain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


