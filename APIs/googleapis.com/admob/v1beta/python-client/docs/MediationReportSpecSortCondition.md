# MediationReportSpecSortCondition

Sorting direction to be applied on a dimension or a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Sort by the specified dimension. | [optional] 
**metric** | **str** | Sort by the specified metric. | [optional] 
**order** | **str** | Sorting order of the dimension or metric. | [optional] 

## Example

```python
from openapi_client.models.mediation_report_spec_sort_condition import MediationReportSpecSortCondition

# TODO update the JSON string below
json = "{}"
# create an instance of MediationReportSpecSortCondition from a JSON string
mediation_report_spec_sort_condition_instance = MediationReportSpecSortCondition.from_json(json)
# print the JSON string representation of the object
print(MediationReportSpecSortCondition.to_json())

# convert the object into a dict
mediation_report_spec_sort_condition_dict = mediation_report_spec_sort_condition_instance.to_dict()
# create an instance of MediationReportSpecSortCondition from a dict
mediation_report_spec_sort_condition_from_dict = MediationReportSpecSortCondition.from_dict(mediation_report_spec_sort_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


