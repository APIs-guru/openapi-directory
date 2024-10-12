# ReportDefinition1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | The report definitions&#39; active | [optional] 
**readonly** | **bool** | The report definitions&#39; readonly | [optional] 
**report_query** | [**ReportQuery**](ReportQuery.md) |  | [optional] 
**supported_transforms** | **str** | The report definitions&#39; supported transforms | [optional] 
**title** | **str** | The report definitions&#39; title | [optional] 
**version** | **str** | The report definitions&#39; version | [optional] 

## Example

```python
from openapi_client.models.report_definition1 import ReportDefinition1

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDefinition1 from a JSON string
report_definition1_instance = ReportDefinition1.from_json(json)
# print the JSON string representation of the object
print(ReportDefinition1.to_json())

# convert the object into a dict
report_definition1_dict = report_definition1_instance.to_dict()
# create an instance of ReportDefinition1 from a dict
report_definition1_from_dict = ReportDefinition1.from_dict(report_definition1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


