# SettlementReport

 Settlement reports detail order-level and item-level credits and debits between you and Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | The end date on which all transactions are included in the report, in ISO 8601 format. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#settlementReport&#x60;\&quot; | [optional] 
**previous_balance** | [**Price**](Price.md) |  | [optional] 
**settlement_id** | **str** | The ID of the settlement report. | [optional] 
**start_date** | **str** | The start date on which all transactions are included in the report, in ISO 8601 format. | [optional] 
**transfer_amount** | [**Price**](Price.md) |  | [optional] 
**transfer_date** | **str** | Date on which transfer for this payment was initiated by Google, in ISO 8601 format. | [optional] 
**transfer_ids** | **List[str]** | The list of bank identifiers used for the transfer. For example, Trace ID for Federal Automated Clearing House (ACH). This may also be known as the Wire ID. | [optional] 

## Example

```python
from openapi_client.models.settlement_report import SettlementReport

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementReport from a JSON string
settlement_report_instance = SettlementReport.from_json(json)
# print the JSON string representation of the object
print(SettlementReport.to_json())

# convert the object into a dict
settlement_report_dict = settlement_report_instance.to_dict()
# create an instance of SettlementReport from a dict
settlement_report_from_dict = SettlementReport.from_dict(settlement_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


