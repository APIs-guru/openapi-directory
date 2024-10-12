# RefreshTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refresh_token** | **str** |  | 

## Example

```python
from openapi_client.models.refresh_token_request import RefreshTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshTokenRequest from a JSON string
refresh_token_request_instance = RefreshTokenRequest.from_json(json)
# print the JSON string representation of the object
print(RefreshTokenRequest.to_json())

# convert the object into a dict
refresh_token_request_dict = refresh_token_request_instance.to_dict()
# create an instance of RefreshTokenRequest from a dict
refresh_token_request_from_dict = RefreshTokenRequest.from_dict(refresh_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


