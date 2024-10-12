# TokenUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_pan_sequence_number** | **str** | New PAN sequence number to be applied to the updated token(s). Conditional field, must not be present when IssuerProductConfigurationId is present. Optional if updating PAN mapping or Expiration Date. | [optional] 
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **str** | Comment related to the updated token(s). | [optional] 
**current_account_pan** | **str** | Current Account PAN of the token(s) to be updated. Conditional field, used for updating all tokens mapped to a single Account PAN and must not be present when TokenUniqueReference is present. | [optional] 
**expiration_date** | **str** | New expiration date to be applied to the updated token(s). Conditional field, must not be present when IssuerProductConfigurationId is present. Optional if updating PAN mapping or PAN Sequence Number. | [optional] 
**issuer_product_configuration_id** | **str** | New product configuration ID to be applied to the updated token(s). Conditional field, must not be present if any of the following are present; NewAccountPan, ExpirationDate, AccountPanSequenceNumber. | [optional] 
**new_account_pan** | **str** | New Account PAN to be applied to the updated token(s) if there is in fact a new Account PAN. Optional if updating Expiration Date or PAN Sequence Number. | [optional] 
**token_unique_reference** | **str** | Unique reference of the token to be updated. Conditional field, used for updating a single token and not used when CurrentAccountPan is present. | [optional] 
**update_wallet_provider_indicator** | **str** | Indicates whether the updated token information should be provided to the Wallet Provider. Valid values:&lt;br /&gt;    \&quot;0\&quot; - Pass the updated information to the Wallet Provider&lt;br /&gt;    \&quot;1\&quot; - Do not pass the updated information to the Wallet Provider.&lt;br /&gt;Optional parameter. The default is 1 if not present. | [optional] 

## Example

```python
from openapi_client.models.token_update_request import TokenUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUpdateRequest from a JSON string
token_update_request_instance = TokenUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TokenUpdateRequest.to_json())

# convert the object into a dict
token_update_request_dict = token_update_request_instance.to_dict()
# create an instance of TokenUpdateRequest from a dict
token_update_request_from_dict = TokenUpdateRequest.from_dict(token_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


