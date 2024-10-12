# SpectacularJWTRefresh

Refresh Access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Your access token | [optional] [readonly] 
**access_expires** | **int** | Access token expires in seconds | [optional] [readonly] [default to 86400]

## Example

```python
from openapi_client.models.spectacular_jwt_refresh import SpectacularJWTRefresh

# TODO update the JSON string below
json = "{}"
# create an instance of SpectacularJWTRefresh from a JSON string
spectacular_jwt_refresh_instance = SpectacularJWTRefresh.from_json(json)
# print the JSON string representation of the object
print(SpectacularJWTRefresh.to_json())

# convert the object into a dict
spectacular_jwt_refresh_dict = spectacular_jwt_refresh_instance.to_dict()
# create an instance of SpectacularJWTRefresh from a dict
spectacular_jwt_refresh_from_dict = SpectacularJWTRefresh.from_dict(spectacular_jwt_refresh_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


