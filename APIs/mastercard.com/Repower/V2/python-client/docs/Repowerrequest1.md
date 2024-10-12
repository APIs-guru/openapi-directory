# Repowerrequest1

Contains the details of the repower request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_sender_information** | **str** |  Contains additional sender information in the Financial Transaction.The first 20 digits will be telephone number(n-20), the next 8 digits will be Date of Birth(n-8)(MMDDYYYY)and &#39;Check&#39; or &#39;Cash&#39; needs to be populated next based on check load or cash load.  Details- String, Min 32 characters, Max 65 characters in Length | [optional] 
**card_acceptor** | [**Cardacceptor2**](Cardacceptor2.md) |  | [optional] 
**card_number** | **str** | Cardholder personal account number. Details- Numeric, 16 or 19, must pass LUHN MOD10 validation | 
**card_sequence_number** | **str** | Card Sequence Number as part of PaymentPOS Entry mode Integrated Circuit and contactless M/Chip. It must be present for EMV,MDES or PayPass transactions (where POS Entry Mode &#x3D; \&quot;05x\&quot; or \&quot;07x\&quot;). Details- Numeric, 3, The Possible values for Card Sequence Number are in the range 000–099 | [optional] 
**channel** | **str** | Origination channel for the rePower transaction as &#39;Attended POS&#39; (P) or &#39;Web&#39; (W).  Details- Alpha, 1, Constant P or W | 
**ica** | **str** | ICA of acquiring institution. Details- Numeric, 4-6 | 
**iccemv_data** | **str** | Integrated Circuit Card (ICC) System related data. It must be present for EMV(Including paypass/MDES EMV) transactions. Details- String, 255. Please refer section &#39;ICCEMVData&#39; for more details. | [optional] 
**local_date** | **str** | This is the local date for the location where the request is originating. Details- Numeric, 4, MMDD | 
**local_time** | **str** |  This is the local time for the location where the request is originating. The format is military or twenty-four hour clock time. Details- Numeric, HHMMSS | 
**merchant_type** | **str** | Merchant&#39;s type of business or Service will be represented as a member financial institution initiated rePower transaction (6532), or merchant initiated rePower transaction (6533). Details- Numeric, 4, constant 6532 or 6533 | 
**pos_card_data_terminal_input_capability_indicator** | **str** | Point of Service (POS) card data terminal input capability indicator. It must be present for EMV,MDES or PayPass transactions (where POS Entry Mode &#x3D; \&quot;05x\&quot; or \&quot;07x\&quot; or \&quot;91x\&quot;). Details- Conditional, numeric, 1, The Possible values for POS card data terminal input capability indicator is 3 or 4. | [optional] 
**payment_initiation_channel** | **str** | Payment Initiation Channel is the device type used to identify mobile-initiated (m-commerce) or other non-card device initiated transactions. It&#39;s an option field for paypass transactions. Details-  Numeric, 2 digits. The possible values for Payment Initiation Channel is detailed out in section &#39;PaymentInitiationChannel&#39; | [optional] 
**payment_pos_entry_mode** | **str** | PaymentPos Entry Mode to represent the POS Terminal PAN Entry Mode &amp; Terminal PIN Entry Mode. This is required for EMV transactions and Paypass/MDES magstripe transactions. The first two digits indicate PAN entry mode and the last digit indicate PIN entry mode. Details- Numeric, 3. For PAN/PIN Entry mode details refer section &#39;PaymentPosEntryMode&#39; | [optional] 
**processor_id** | **str** | Processor Id. Details- Numeric, 10 | 
**receiver_track2_data** | **str** | Contains 8 sub fields to enhance the repower API to support EMV scripting data fields.It must be present for EMV, MDES or PayPass transactions(where POS Entry Mode is other than 010 or 011 or 012). Details- Conditional, String, Max 37 characters in Length. Refer section &#39;ReceiverTrack2Data&#39; | [optional] 
**routing_and_transit_number** | **str** | Routing and Transit number. Details- Numeric, 9 | 
**transaction_amount** | [**Transactionamount3**](Transactionamount3.md) |  | [optional] 
**transaction_fee** | [**Transactionfee4**](Transactionfee4.md) |  | [optional] 
**transaction_reference** | **str** | Repower Transaction Reference Number. Provided by the Client submitting the rePower transfer request. Must be \&quot;unique\&quot; across all rePower transfer requests. Details- Numeric, length 19 | 

## Example

```python
from openapi_client.models.repowerrequest1 import Repowerrequest1

# TODO update the JSON string below
json = "{}"
# create an instance of Repowerrequest1 from a JSON string
repowerrequest1_instance = Repowerrequest1.from_json(json)
# print the JSON string representation of the object
print(Repowerrequest1.to_json())

# convert the object into a dict
repowerrequest1_dict = repowerrequest1_instance.to_dict()
# create an instance of Repowerrequest1 from a dict
repowerrequest1_from_dict = Repowerrequest1.from_dict(repowerrequest1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


