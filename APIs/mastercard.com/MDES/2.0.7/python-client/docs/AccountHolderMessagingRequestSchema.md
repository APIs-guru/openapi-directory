# AccountHolderMessagingRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**issuer_application_message_display** | **str** | This is the indicator if the message can be viewed in the Issuer Application using the MessageIdentifier. &lt;br&gt;Please refer to the Apple Card Notification Specification for Notification Deep Linking. Mandatory field.  Valid values are;&lt;br&gt;TRUE ? The message can be viewed in the issuer application&lt;br&gt;FALSE ? The message cannot be viewed in the issuer application. | 
**message_expiration** | **str** | Date and time after which the message is no longer valid.  Maximum value of 30 days in the future. Mandatory field.  __ISO 8601 format ? YYYY-MM-DDThh:mm:ssTZD__ | 
**message_identifier** | **str** | This is the message identifier. This could be used for linking into the issuer application. Mandatory field. | 
**message_language_code** | **str** | The language of the message.  Only messages with the requested language code will be presented to the account holder. Mandatory field.  &lt;br&gt;__ISO 639-1 format__ | 
**message_text** | **str** | This is the message which will be displayed to the cardholder. Mandatory field. | 
**token_unique_reference** | **str** | When present, the search will return one specific matching token. Cannot be used together with any of the following search request parameters; AccountPan, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier. Mandatory field. | 

## Example

```python
from openapi_client.models.account_holder_messaging_request_schema import AccountHolderMessagingRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AccountHolderMessagingRequestSchema from a JSON string
account_holder_messaging_request_schema_instance = AccountHolderMessagingRequestSchema.from_json(json)
# print the JSON string representation of the object
print(AccountHolderMessagingRequestSchema.to_json())

# convert the object into a dict
account_holder_messaging_request_schema_dict = account_holder_messaging_request_schema_instance.to_dict()
# create an instance of AccountHolderMessagingRequestSchema from a dict
account_holder_messaging_request_schema_from_dict = AccountHolderMessagingRequestSchema.from_dict(account_holder_messaging_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


