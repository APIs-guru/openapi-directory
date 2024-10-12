# RefreshRuntimeTokenInternalResponse

Response with a new access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The OAuth 2.0 access token. | [optional] 
**expire_time** | **str** | Output only. Token expiration time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.refresh_runtime_token_internal_response import RefreshRuntimeTokenInternalResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshRuntimeTokenInternalResponse from a JSON string
refresh_runtime_token_internal_response_instance = RefreshRuntimeTokenInternalResponse.from_json(json)
# print the JSON string representation of the object
print(RefreshRuntimeTokenInternalResponse.to_json())

# convert the object into a dict
refresh_runtime_token_internal_response_dict = refresh_runtime_token_internal_response_instance.to_dict()
# create an instance of RefreshRuntimeTokenInternalResponse from a dict
refresh_runtime_token_internal_response_from_dict = RefreshRuntimeTokenInternalResponse.from_dict(refresh_runtime_token_internal_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


