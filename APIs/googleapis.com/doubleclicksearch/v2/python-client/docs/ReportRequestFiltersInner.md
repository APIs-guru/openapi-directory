# ReportRequestFiltersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | [**ReportApiColumnSpec**](ReportApiColumnSpec.md) |  | [optional] 
**operator** | **str** | Operator to use in the filter. See the filter reference for a list of available operators. | [optional] 
**values** | **List[object]** | A list of values to filter the column value against.\\ The maximum number of filter values per request is 300. | [optional] 

## Example

```python
from openapi_client.models.report_request_filters_inner import ReportRequestFiltersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequestFiltersInner from a JSON string
report_request_filters_inner_instance = ReportRequestFiltersInner.from_json(json)
# print the JSON string representation of the object
print(ReportRequestFiltersInner.to_json())

# convert the object into a dict
report_request_filters_inner_dict = report_request_filters_inner_instance.to_dict()
# create an instance of ReportRequestFiltersInner from a dict
report_request_filters_inner_from_dict = ReportRequestFiltersInner.from_dict(report_request_filters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


