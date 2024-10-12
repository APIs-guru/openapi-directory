# MerchantRefundTransfer93

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_message** | **str** | Message a financial institution will associate to the transfer and may display. \\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Length: 1-65 | [optional] 
**amount** | **str** | Amount of the transfer. The decimal point is implied based on the payment transfer currency. Details- 1-999999999999 | 
**authentication_value** | **str** | List of name/value pairs containing authentication  values. Refer &#39;Authentication Value URIs&#39; | [optional] 
**channel** | **str** | Initiation channel of the transfer request. This value can be defined in the onboarding process instead of passing in every call. Values: WEB, MOBILE, BANK, KIOSK. Details- Conditional | [optional] 
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. Details- Alpha, Length: 3 | 
**device_id** | **str** | The serial number of a device initiating the transfer. Details- 1-40 | [optional] 
**digital_account_reference_number** | **str** | URI to identify the digital account reference number. URI scheme must be pan. If merchant_refund_transfer.sender_account_uri does not start with PAN, the Digital Account Reference Number is required. Valid Values- Refer &#39;Account URIs&#39;. | [optional] 
**funding_source** | **str** | Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH. In the Asia/Pacific region, funding sources are limited to Mastercard cards. In Subfield 1 values 04, 05, 06, and 07 are not applicable. | 
**interchange_rate_designator** | **str** | Indicates the interchange rate and editing rules applied to the transaction.  Type:Alphanumeric [a-zA-Z 0-9], Length: 2 | [optional] 
**location** | **str** | Location where the transaction is initiated. Valid Values- Refer &#39;Location URIs&#39;. | [optional] 
**mastercard_assigned_id** | **str** | Mastercard Assigned ID for tiered interchange calculations. This field can be provided when available if transfer.payment_type is P2M. Type: Numeric [0-9], Maximum Length: 6 | [optional] 
**participant** | [**Participant101**](Participant101.md) |  | [optional] 
**participation_id** | **str** | Participation identifier of the sender. The receiving financial institution will associate the value to the transfer. Details- 1-30 | [optional] 
**payment_origination_country** | **str** | The country where the payment originates from as an ISO 3166-1 alpha-3 country code, in uppercase. Details - Conditional. If provided, this should match a valid country configured for the partner during onboarding. If the partner is configured for multiple origination countries this field is required and must be provided. Alpha, length: 3 | [optional] 
**payment_transaction_reference** | [**PaymentTransactionReference102**](PaymentTransactionReference102.md) |  | [optional] 
**payment_type** | **str** | MRF: Merchant Refund | 
**processor_id** | **str** | The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10 | [optional] 
**recipient** | [**Recipient96**](Recipient96.md) |  | [optional] 
**reconciliation_data** | [**ReconciliationData99**](ReconciliationData99.md) |  | [optional] 
**routing_transit_number** | **str** | The nine-digit Federal Reserve Routing and Transit (R &amp; T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9 | [optional] 
**sender** | [**Sender94**](Sender94.md) |  | [optional] 
**sender_account_uri** | **str** | URI to identify the account information of the sender. When PAN is the URI then sender information is required. If scheme chosen is raw, then funding_source must be other than CREDIT, DEBIT or PREPAID. Valid Values- Refer &#39;Account URIs&#39; | 
**token_cryptogram** | [**TokenCryptogram103**](TokenCryptogram103.md) |  | [optional] 
**transaction_local_date_time** | **str** | Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm]  | 
**transfer_reference** | **str** | Provide a unique transaction reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~ | 

## Example

```python
from openapi_client.models.merchant_refund_transfer93 import MerchantRefundTransfer93

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantRefundTransfer93 from a JSON string
merchant_refund_transfer93_instance = MerchantRefundTransfer93.from_json(json)
# print the JSON string representation of the object
print(MerchantRefundTransfer93.to_json())

# convert the object into a dict
merchant_refund_transfer93_dict = merchant_refund_transfer93_instance.to_dict()
# create an instance of MerchantRefundTransfer93 from a dict
merchant_refund_transfer93_from_dict = MerchantRefundTransfer93.from_dict(merchant_refund_transfer93_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


