# TokenResetMobilePinResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_reset_mobile_pin_response** | [**SimpleTokenResponse**](SimpleTokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_reset_mobile_pin_response_schema import TokenResetMobilePinResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResetMobilePinResponseSchema from a JSON string
token_reset_mobile_pin_response_schema_instance = TokenResetMobilePinResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenResetMobilePinResponseSchema.to_json())

# convert the object into a dict
token_reset_mobile_pin_response_schema_dict = token_reset_mobile_pin_response_schema_instance.to_dict()
# create an instance of TokenResetMobilePinResponseSchema from a dict
token_reset_mobile_pin_response_schema_from_dict = TokenResetMobilePinResponseSchema.from_dict(token_reset_mobile_pin_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


