# MediationReportSpecDimensionFilter

Describes which report rows to match based on their dimension values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Applies the filter criterion to the specified dimension. | [optional] 
**matches_any** | [**StringList**](StringList.md) |  | [optional] 

## Example

```python
from openapi_client.models.mediation_report_spec_dimension_filter import MediationReportSpecDimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MediationReportSpecDimensionFilter from a JSON string
mediation_report_spec_dimension_filter_instance = MediationReportSpecDimensionFilter.from_json(json)
# print the JSON string representation of the object
print(MediationReportSpecDimensionFilter.to_json())

# convert the object into a dict
mediation_report_spec_dimension_filter_dict = mediation_report_spec_dimension_filter_instance.to_dict()
# create an instance of MediationReportSpecDimensionFilter from a dict
mediation_report_spec_dimension_filter_from_dict = MediationReportSpecDimensionFilter.from_dict(mediation_report_spec_dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


