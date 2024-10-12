# BalanceSheetFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | Filter by end date. If end date is given, start date is required. | [optional] 
**start_date** | **str** | Filter by start date. If start date is given, end date is required. | [optional] 

## Example

```python
from openapi_client.models.balance_sheet_filter import BalanceSheetFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetFilter from a JSON string
balance_sheet_filter_instance = BalanceSheetFilter.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetFilter.to_json())

# convert the object into a dict
balance_sheet_filter_dict = balance_sheet_filter_instance.to_dict()
# create an instance of BalanceSheetFilter from a dict
balance_sheet_filter_from_dict = BalanceSheetFilter.from_dict(balance_sheet_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


