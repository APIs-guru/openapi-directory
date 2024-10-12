# MerchantTransfer1

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_message** | **str** | Message a financial institution will associate to the transfer and may display. \\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Length: 1-65 | [optional] 
**convenience_amount** | **str** | Amount of the convenience fee. The decimal point is implied based on the transaction_amount.currency. \&quot;[0-9]*\&quot;. Max Length: 12. Value must be less than payment_transfer.amount. | [optional] 
**convenience_indicator** | **str** | Convenience fee type code. Min length: 2. Max Length: 2. Valid values  (01: Indicates Consumer should be prompted to enter tip 02: Indicates that merchant would mandatorily charge a flat convenience fee 03: Indicates that merchant would charge a percentage convenience fee) | [optional] 
**digital_account_reference_number** | **str** | URI to identify the digital account reference number. URI scheme must be pan. Valid Values- Refer &#39;Account URIs&#39;.  | [optional] 
**interchange_rate_designator** | **str** | Indicates the interchange rate and editing rules applied to the transaction. Field is applicable for Europe OIs only.  Type:Alphanumeric [a-zA-Z 0-9], Length: 2 | [optional] 
**mastercard_assigned_id** | **str** | Mastercard Assigned ID for tiered interchange calculations.   Type: Numeric [0-9], Length: 6 | [optional] 
**participant** | [**Participant13**](Participant13.md) |  | 
**participation_id** | **str** | Participation identifier of the sender. The receiving financial institution will associate the value to the transfer. \\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Length: 1-30 | [optional] 
**payment_origination_country** | **str** | Country where the payment originated from as an ISO 3166-1 alpha-3 country code.   Type: Alpha [A-Z], Length: 3 | [optional] 
**payment_type** | **str** | Payment type used for transfer. Value - P2M: Person to Merchant.   Type: Alphanumeric [A-Z0-9], Length: 3 | 
**processor_id** | **str** | The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. Partner must provide this value only if the program they are enabling requires it. For all other implementations this value must not be provided.   Type: Numeric [0-9], Length: 10 | [optional] 
**qr_data** | **str** | Encoded QR (Quick Response) code data. Type: Alphanumeric and special characters [a-zA-Z0-9!\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 237 | [optional] 
**recipient** | [**Recipient7**](Recipient7.md) |  | 
**recipient_account_uri** | **str** | URI to identify the account of the recipient/merchant. Pan, Manual Entry Alias and Alias are valid schemas. Refer &#39;Account URIs&#39; | 
**reconciliation_data** | [**ReconciliationData11**](ReconciliationData11.md) |  | [optional] 
**routing_transit_number** | **str** | The nine-digit Federal Reserve Routing and Transit (R &amp; T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. Partner must provide this value only if the program they are enabling requires it. For all other implementations this value must not be provided.    Type: Numeric [0-9], Length: 9 | [optional] 
**sender** | [**Sender3**](Sender3.md) |  | 
**sender_account_uri** | **str** | URI to identify the account information of the sender. Only PAN is the valid scheme. Refer &#39;Account URIs&#39; | 
**transaction_local_date_time** | **str** | Local date and time when the transaction is submitted as an ISO 8601 format.   Type: Alphanumerical Special [A-Z 0-9-:], Length: 25 | 
**transfer_amount** | [**TransferAmount2**](TransferAmount2.md) |  | 
**transfer_reference** | **str** | Provide a unique transaction reference number. It must be a unique value for each request initiated by the partner.   Type: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~], Length: 6-40 | 
**unique_reference_number** | **str** | Unique reference number for the transaction.    Type: Alphanumeric [a-zA-Z 0-9], Maximum Length: 19 | [optional] 

## Example

```python
from openapi_client.models.merchant_transfer1 import MerchantTransfer1

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantTransfer1 from a JSON string
merchant_transfer1_instance = MerchantTransfer1.from_json(json)
# print the JSON string representation of the object
print(MerchantTransfer1.to_json())

# convert the object into a dict
merchant_transfer1_dict = merchant_transfer1_instance.to_dict()
# create an instance of MerchantTransfer1 from a dict
merchant_transfer1_from_dict = MerchantTransfer1.from_dict(merchant_transfer1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


