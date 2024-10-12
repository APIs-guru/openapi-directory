# JournalInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_type** | **str** | The journal instructions&#39; accounting type | [optional] 
**description** | **str** | The journal instructions&#39; description | [optional] 
**end_date** | **date** | The journal instructions&#39; end date | [optional] 
**expression** | **str** | The journal instructions&#39; expression | [optional] 
**journal_line_tag** | **str** | The journal instructions&#39; journal line tag | [optional] 
**ledger_target** | **str** | The journal instructions&#39; ledger target | [optional] 
**nom_code** | **str** | The journal instructions&#39; nom code | [optional] 
**start_date** | **date** | The journal instructions&#39; start date | [optional] 
**sub_nom_code** | **str** | The journal instructions&#39; sub nom code | [optional] 

## Example

```python
from openapi_client.models.journal_instruction1 import JournalInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of JournalInstruction1 from a JSON string
journal_instruction1_instance = JournalInstruction1.from_json(json)
# print the JSON string representation of the object
print(JournalInstruction1.to_json())

# convert the object into a dict
journal_instruction1_dict = journal_instruction1_instance.to_dict()
# create an instance of JournalInstruction1 from a dict
journal_instruction1_from_dict = JournalInstruction1.from_dict(journal_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


