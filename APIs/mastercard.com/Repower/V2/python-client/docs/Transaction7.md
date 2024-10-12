# Transaction7

Information for one transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_reference_number** | **str** | Network Reference Number that can be used for transaction inquiry. Details- Numeric, 9 | [optional] 
**response** | [**Response8**](Response8.md) |  | [optional] 
**settlement_date** | **str** | Date Funds will be transferred between the acquirer and issuer by Single Message System, in MMDD format | [optional] 
**submit_date_time** | **str** | This is the time and date of the transaction submission, in the following format: &lt;date&gt;T&lt;time&gt;Z, where date&gt; is YYYY-MM-DD, &lt;time&gt; is HH:MM:SS | [optional] 
**system_trace_audit_number** | **str** | Identifier assigned to each transaction by the rePower service. This identifier is unique for any single UTC date. Details- Numeric value, 6 | [optional] 
**type** | **str** | Type of transaction. Details- Alpha | [optional] 

## Example

```python
from openapi_client.models.transaction7 import Transaction7

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction7 from a JSON string
transaction7_instance = Transaction7.from_json(json)
# print the JSON string representation of the object
print(Transaction7.to_json())

# convert the object into a dict
transaction7_dict = transaction7_instance.to_dict()
# create an instance of Transaction7 from a dict
transaction7_from_dict = Transaction7.from_dict(transaction7_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


