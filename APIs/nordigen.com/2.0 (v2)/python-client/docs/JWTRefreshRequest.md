# JWTRefreshRequest

Refresh access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refresh** | **str** |  | 

## Example

```python
from openapi_client.models.jwt_refresh_request import JWTRefreshRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JWTRefreshRequest from a JSON string
jwt_refresh_request_instance = JWTRefreshRequest.from_json(json)
# print the JSON string representation of the object
print(JWTRefreshRequest.to_json())

# convert the object into a dict
jwt_refresh_request_dict = jwt_refresh_request_instance.to_dict()
# create an instance of JWTRefreshRequest from a dict
jwt_refresh_request_from_dict = JWTRefreshRequest.from_dict(jwt_refresh_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


