# PathReportDimensionValue

Represents a PathReportDimensionValue resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | The name of the dimension. | [optional] 
**ids** | **List[str]** | The possible ID&#39;s associated with the value if available. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#pathReportDimensionValue. | [optional] 
**match_type** | **str** | Determines how the &#39;value&#39; field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, &#39;*&#39; is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions (&#39;dfa:paidSearch*&#39;) allow a matchType other than EXACT. | [optional] 
**values** | **List[str]** | The possible values of the dimension. | [optional] 

## Example

```python
from openapi_client.models.path_report_dimension_value import PathReportDimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of PathReportDimensionValue from a JSON string
path_report_dimension_value_instance = PathReportDimensionValue.from_json(json)
# print the JSON string representation of the object
print(PathReportDimensionValue.to_json())

# convert the object into a dict
path_report_dimension_value_dict = path_report_dimension_value_instance.to_dict()
# create an instance of PathReportDimensionValue from a dict
path_report_dimension_value_from_dict = PathReportDimensionValue.from_dict(path_report_dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


