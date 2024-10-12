# TokenResetMobilePinRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **str** | Comment related to the token mobile PIN reset. | [optional] 
**reason_code** | **str** | The reason for the action. Valid values:&lt;br /&gt;    \&quot;N\&quot; - Cardholder requested new Mobile PIN&lt;br /&gt;    \&quot;R\&quot; ? Mobile PIN try counter violation | 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.token_reset_mobile_pin_request import TokenResetMobilePinRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResetMobilePinRequest from a JSON string
token_reset_mobile_pin_request_instance = TokenResetMobilePinRequest.from_json(json)
# print the JSON string representation of the object
print(TokenResetMobilePinRequest.to_json())

# convert the object into a dict
token_reset_mobile_pin_request_dict = token_reset_mobile_pin_request_instance.to_dict()
# create an instance of TokenResetMobilePinRequest from a dict
token_reset_mobile_pin_request_from_dict = TokenResetMobilePinRequest.from_dict(token_reset_mobile_pin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


