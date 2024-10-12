# PGApiTokenizeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avs_address** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 20 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank. | [optional] 
**avs_zip** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 9 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;This field is required if avs_address is present. | [optional] 
**card_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Card ID received from a tokenization request. The card_id may be used in place of a card number in requests requiring cardholder account data.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#card-source-conditional-requirements\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Card or Bank Account Data Sources and Conditional Requirements&lt;/a&gt; | [optional] 
**card_number** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 19 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Cardholder&#39;s card number.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#card-source-conditional-requirements\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Card or Bank Account Data Sources and Conditional Requirements&lt;/a&gt; | [optional] 
**card_swipe** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 79&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Contains either track 1 or track 2 magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the implementer to send data for only one of the two tracks.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#card-source-conditional-requirements\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Card or Bank Account Data Sources and Conditional Requirements&lt;/a&gt; | [optional] 
**cardholder_name** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 64 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;When provided in a tokenize request, the cardholder name will be stored in the Card Vault along with the cardholder card number and expiration date. | [optional] 
**client_ip** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Client IP address. | [optional] 
**cvv2** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 4 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;CVV2 or CID value from the signature panel on the back of the cardholder&#39;s card. If present during a request that requires authorization, the value will be sent to the issuer for validation. | [optional] 
**dda_number** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 17 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Owner&#39;s account number at the bank. Applicable for ACH payments.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#card-source-conditional-requirements\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Card or Bank Account Data Sources and Conditional Requirements&lt;/a&gt; | [optional] 
**developer_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.  | [optional] 
**echo_fields** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a JSON array of field data that will be echoed back in the response message. | [optional] 
**email_address** | **List[str]** |  AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;An array of account holder email addresses. | [optional] 
**exp_date** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 4 N(MMYY format)&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Expiration date of cardholder card number. When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#card-source-conditional-requirements\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Card or Bank Account Data Sources and Conditional Requirements&lt;/a&gt; | 
**loc_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 4 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request. | [optional] 
**merchant_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Unique identifier on the Qualpay system. | 
**payload_apple_pay** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Apple Pay payload | [optional] 
**payload_google_pay** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Google Pay payload | [optional] 
**profile_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 20 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Explicitly identifies which Payment Gateway profile should be used for the request. | [optional] 
**report_data** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager. | [optional] 
**retry_attempt** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 4 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;This field is required when the retry_id is present in the request message. | [optional] 
**retry_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 15 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message. | [optional] 
**session_id** | **str** | INTERNAL USE ONLY. | [optional] 
**single_use** | **bool** | &lt;br&gt;&lt;strong&gt;Default: &lt;/strong&gt;false&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;In a tokenize request, setting the single_use field to \&quot;true\&quot; will cause a single-use token to be generated. This token will expire in 10 minutes or when first used. | [optional] 
**tr_number** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 9 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Bank transit/routing number. Applicable for ACH payments.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#card-source-conditional-requirements\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Card or Bank Account Data Sources and Conditional Requirements&lt;/a&gt; | [optional] 
**type_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 1 AN&lt;br&gt;&lt;strong&gt;Default: &lt;/strong&gt;C&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Bank Account Type. Applicable for ACH payments. Possible values are: &lt;ul&gt;&lt;li&gt;C &#x3D; Personal checking account&lt;/li&gt;&lt;li&gt;S &#x3D; Personal savings account&lt;/li&gt;&lt;li&gt;K &#x3D; Business checking account&lt;/li&gt;&lt;li&gt;V &#x3D; Business savings account&lt;/li&gt;&lt;/ul&gt; | [optional] 
**user_id** | **int** | INTERNAL USE ONLY. | [optional] 
**vendor_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Identifies the vendor to which this tokenize request applies. | [optional] 

## Example

```python
from openapi_client.models.pg_api_tokenize_request import PGApiTokenizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PGApiTokenizeRequest from a JSON string
pg_api_tokenize_request_instance = PGApiTokenizeRequest.from_json(json)
# print the JSON string representation of the object
print(PGApiTokenizeRequest.to_json())

# convert the object into a dict
pg_api_tokenize_request_dict = pg_api_tokenize_request_instance.to_dict()
# create an instance of PGApiTokenizeRequest from a dict
pg_api_tokenize_request_from_dict = PGApiTokenizeRequest.from_dict(pg_api_tokenize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


