# FundingTransfer118

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_message** | **str** | Additional Message. Details- alpha-numeric 1-65 | [optional] 
**amount** | **str** | Amount of the transfer in the smallest unit of currency. Decimal implied before last two positions. Example: 100 &#x3D; $1.00USD Details- numeric, 1-999999999999 | 
**authentication_value** | **str** | List of name/value pairs containing authentication  values. Refer &#39;Authentication Value URIs&#39; | [optional] 
**channel** | **str** |  Initiation channel of the payment request. This value can be defined in the onboarding process instead of passing in every call One of the WEB, MOBILE, BANK, KIOSK. Details- Conditional | [optional] 
**currency** | **str** | Three-letter ISO currency code representing the currency of the transfer amount. Details- alpha, length: 3 | 
**device_id** | **str** | The serial number of a device. Details- 1-40 | [optional] 
**funding_hints** | **str** | List of name/value pairs containing funding parameter values. Valid Values- Refer &#39;Funding Hints URIs&#39; | [optional] 
**interchange_rate_designator** | **str** | Indicates the interchange rate and editing rules applied to the transaction.  Type:Alphanumeric [a-zA-Z 0-9], Length: 2 | [optional] 
**language_data** | **str** | Language Data Details- binary 1-65 | [optional] 
**language_identification** | **str** | Language Identification. Details- alpha - 3 | [optional] 
**location** | **str** | Location where the transaction is initiated from. Details- 1-40. Valid Values- Refer &#39;Location URIs&#39; | [optional] 
**participation_id** | **str** | Participation Id. An identifier agreed by both the issuing institution and the merchant. Details- alpha-numeric 1-30 | [optional] 
**payment_type** | **str** | Payment type used for transfer. Value - P2M: Person to Merchant.   Type: Alphanumeric [A-Z0-9], Length: 3 | [optional] 
**recipient** | [**Recipient123**](Recipient123.md) |  | [optional] 
**recipient_account_uri** | **str** | URI identifying receiver&#39;s account to receive the transfer. Valid Values- Refer &#39;Account URIs&#39; | 
**reconciliation_data** | [**ReconciliationData126**](ReconciliationData126.md) |  | [optional] 
**sanction_screening_override** | **bool** | Override indicator if partner has opted into Sanction Screening validation as part of transaction processing.  If Sanction Screening score on either sender or receiver is equal to or above threshold configured for partner, the payment will error.  To bypass the Sanction Screening validation and process the payment the value &#39;true&#39; should be submitted.  Details:  Optional – If partner has not enabled Sanction Screening validation default is &#39;true&#39;.   Required - If partner has opted into Sanction Screening validation but wants to bypass Sanction Screening validation and process the payment, value should be &#39;true&#39;.  | [optional] 
**sender** | [**Sender119**](Sender119.md) |  | [optional] 
**sender_account_uri** | **str** | URI identifying sender&#39;s account to fund the transfer. Only a pan based account is valid. Valid Values- Refer &#39;Account URIs&#39; Details- Conditional | [optional] 
**statement_descriptor** | **str** | The statement descriptor is a string which will be displayed on the recipient&#39;s bank or card statement. It consists of one or two parts: the prefix and the content. The prefix is an optional short string typically used to identify the client/merchant. It is defined during client/merchant onboarding and the same value should be used. If not provided in the API call, system will use the value defined in the onboarding process. The content portion of the statement descriptor will be displayed on the recipient&#39;s statement. If both the prefix and content portions are defined, they both are appended &amp;lt;prefix&amp;gt;+&amp;lt;content&amp;gt; The overall length may be at most 22 characters, including the prefix (even if not provided in the API call) and the content. Note: While most financial institutions display this information consistently, some may display it incorrectly or not at all. Details- Conditional, 22 | [optional] 
**token_cryptogram** | [**TokenCryptogram128**](TokenCryptogram128.md) |  | [optional] 
**transfer_reference** | **str** | Unique transaction reference number. It must be unique within the partner&#39;s domain. Allowable characters are alphanumeric and * , - . _ ~. Details- 6-40 | 

## Example

```python
from openapi_client.models.funding_transfer118 import FundingTransfer118

# TODO update the JSON string below
json = "{}"
# create an instance of FundingTransfer118 from a JSON string
funding_transfer118_instance = FundingTransfer118.from_json(json)
# print the JSON string representation of the object
print(FundingTransfer118.to_json())

# convert the object into a dict
funding_transfer118_dict = funding_transfer118_instance.to_dict()
# create an instance of FundingTransfer118 from a dict
funding_transfer118_from_dict = FundingTransfer118.from_dict(funding_transfer118_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


