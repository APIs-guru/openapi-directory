# RefreshTokenRequestPartial

RefreshTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refresh_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.refresh_token_request_partial import RefreshTokenRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshTokenRequestPartial from a JSON string
refresh_token_request_partial_instance = RefreshTokenRequestPartial.from_json(json)
# print the JSON string representation of the object
print(RefreshTokenRequestPartial.to_json())

# convert the object into a dict
refresh_token_request_partial_dict = refresh_token_request_partial_instance.to_dict()
# create an instance of RefreshTokenRequestPartial from a dict
refresh_token_request_partial_from_dict = RefreshTokenRequestPartial.from_dict(refresh_token_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


