# ReportQuery

The report definitions' report query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | The querys&#39; encoding | [optional] 
**exclude_null_or_empty_elements** | **bool** | The querys&#39; exclude null or empty elements | [optional] 
**groups** | [**Group**](Group.md) |  | [optional] 
**root_node_name** | **str** | The querys&#39; root node name | [optional] 
**suppress_metric_attributes** | **bool** | The querys&#39; suppress metric attributes | [optional] 
**variables** | [**Variable**](Variable.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_query import ReportQuery

# TODO update the JSON string below
json = "{}"
# create an instance of ReportQuery from a JSON string
report_query_instance = ReportQuery.from_json(json)
# print the JSON string representation of the object
print(ReportQuery.to_json())

# convert the object into a dict
report_query_dict = report_query_instance.to_dict()
# create an instance of ReportQuery from a dict
report_query_from_dict = ReportQuery.from_dict(report_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


