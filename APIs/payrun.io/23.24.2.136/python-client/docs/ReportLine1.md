# ReportLine1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The report lines&#39; description | [optional] 
**generated** | **datetime** | The report lines&#39; generated | [optional] 
**tax_month** | **int** | The report lines&#39; tax month | [optional] 
**tax_year** | **int** | The report lines&#39; tax year | [optional] 
**value** | **float** | The report lines&#39; value | [optional] 

## Example

```python
from openapi_client.models.report_line1 import ReportLine1

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLine1 from a JSON string
report_line1_instance = ReportLine1.from_json(json)
# print the JSON string representation of the object
print(ReportLine1.to_json())

# convert the object into a dict
report_line1_dict = report_line1_instance.to_dict()
# create an instance of ReportLine1 from a dict
report_line1_from_dict = ReportLine1.from_dict(report_line1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


