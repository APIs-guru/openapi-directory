# JournalLine1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit** | **float** | The journal lines&#39; credit | [optional] 
**debit** | **float** | The journal lines&#39; debit | [optional] 
**description** | **str** | The journal lines&#39; description | [optional] 
**employee** | [**Employee3**](Employee3.md) |  | [optional] 
**generated** | **datetime** | The journal lines&#39; generated | [optional] 
**grouping** | **str** | The journal lines&#39; grouping | [optional] 
**ledger_target** | **str** | The journal lines&#39; ledger target | [optional] 
**nom_code** | **str** | The journal lines&#39; nom code | [optional] 
**pay_frequency** | **str** | The journal lines&#39; pay frequency | [optional] 
**pay_run** | [**PayRun2**](PayRun2.md) |  | [optional] 
**sub_contractor** | [**SubContractor2**](SubContractor2.md) |  | [optional] 
**sub_nom_code** | **str** | The journal lines&#39; sub nom code | [optional] 
**tax_period** | **int** | The journal lines&#39; tax period | [optional] 
**tax_year** | **int** | The journal lines&#39; tax year | [optional] 

## Example

```python
from openapi_client.models.journal_line1 import JournalLine1

# TODO update the JSON string below
json = "{}"
# create an instance of JournalLine1 from a JSON string
journal_line1_instance = JournalLine1.from_json(json)
# print the JSON string representation of the object
print(JournalLine1.to_json())

# convert the object into a dict
journal_line1_dict = journal_line1_instance.to_dict()
# create an instance of JournalLine1 from a dict
journal_line1_from_dict = JournalLine1.from_dict(journal_line1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


