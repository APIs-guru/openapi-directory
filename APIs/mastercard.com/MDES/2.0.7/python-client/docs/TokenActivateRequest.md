# TokenActivateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_pan** | **int** | The Account PAN of the token to be activated. Conditional field, must be present when PaymentAppInstanceId is present, must not be present when TokenUniqueReference is present. | [optional] 
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **int** | Comment related to activating this token. | [optional] 
**payment_app_instance_id** | **int** | Identifier of the Payment App instance within a device that will be provisioned with a token. &lt;br&gt;&lt;br&gt;_Note:_ This may contain the identifier of the Secure Element or a mobile device for some programs. Conditional field, must be present when AccountPan is present. Must not be present when TokenUniqueReference is present. | [optional] 
**reason_code** | **str** | Reason for the activation. Valid values:&lt;br /&gt;    \&quot;A\&quot; &#x3D; Cardholder successfully authenticated prior to activation.&lt;br /&gt;    \&quot;C\&quot; &#x3D; Cardholder successfully authenticated with a customer service agent prior to activation. | 
**token_unique_reference** | **str** | TokenUniqueReference for the token to be activated. Conditional field, present when AccountPan and PaymentAppInstanceId are not present. | [optional] 

## Example

```python
from openapi_client.models.token_activate_request import TokenActivateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenActivateRequest from a JSON string
token_activate_request_instance = TokenActivateRequest.from_json(json)
# print the JSON string representation of the object
print(TokenActivateRequest.to_json())

# convert the object into a dict
token_activate_request_dict = token_activate_request_instance.to_dict()
# create an instance of TokenActivateRequest from a dict
token_activate_request_from_dict = TokenActivateRequest.from_dict(token_activate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


