# ReportingInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** | The reporting instructions&#39; end date | [optional] 
**start_date** | **date** | The reporting instructions&#39; start date | [optional] 
**tax_month** | **int** | The reporting instructions&#39; tax month | [optional] 
**tax_year** | **int** | The reporting instructions&#39; tax year | [optional] 
**value** | **float** | The reporting instructions&#39; value | [optional] 

## Example

```python
from openapi_client.models.reporting_instruction1 import ReportingInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of ReportingInstruction1 from a JSON string
reporting_instruction1_instance = ReportingInstruction1.from_json(json)
# print the JSON string representation of the object
print(ReportingInstruction1.to_json())

# convert the object into a dict
reporting_instruction1_dict = reporting_instruction1_instance.to_dict()
# create an instance of ReportingInstruction1 from a dict
reporting_instruction1_from_dict = ReportingInstruction1.from_dict(reporting_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


