# Repower5

Response details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_balance** | [**Accountbalance9**](Accountbalance9.md) |  | [optional] 
**iccemv_data** | **str** |  Integrated Circuit Card (ICC) System related data. It must be present for EMV transactions. Required DE 55 Subelements in /0200 and /0220 Messages. Details- Conditional, String, 255 | [optional] 
**pan_mapping_file_information** | **str** | PAN Mapping File Information will be avalable when the PAN is MDES token. Details- Conditional, String, 33 | [optional] 
**person_present_indicator** | **str** | Person Present Indicator values is populated in repower response. Where the repower requests are  a. PaymentPosEntryMode (07*/09*)  b. CardSequenceNumber &gt; 0  c. Transaction Amount &gt; 0 It is a number value and size 2 digit | [optional] 
**request_id** | **str** | This is the unique identifier for API Web service request. Details- Numeric value, variable length between 1 and 19 digits, without zero padding | [optional] 
**transaction_history** | [**Transactionhistory6**](Transactionhistory6.md) |  | [optional] 
**transaction_reference** | **str** | This value represents the unique reference number for the rePower transaction provided by the merchant or acquiring institution. Details- Alphanumeric value, 19 | [optional] 

## Example

```python
from openapi_client.models.repower5 import Repower5

# TODO update the JSON string below
json = "{}"
# create an instance of Repower5 from a JSON string
repower5_instance = Repower5.from_json(json)
# print the JSON string representation of the object
print(Repower5.to_json())

# convert the object into a dict
repower5_dict = repower5_instance.to_dict()
# create an instance of Repower5 from a dict
repower5_from_dict = Repower5.from_dict(repower5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


