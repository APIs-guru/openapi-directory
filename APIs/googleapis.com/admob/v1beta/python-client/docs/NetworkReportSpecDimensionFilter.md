# NetworkReportSpecDimensionFilter

Describes which report rows to match based on their dimension values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Applies the filter criterion to the specified dimension. | [optional] 
**matches_any** | [**StringList**](StringList.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_report_spec_dimension_filter import NetworkReportSpecDimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkReportSpecDimensionFilter from a JSON string
network_report_spec_dimension_filter_instance = NetworkReportSpecDimensionFilter.from_json(json)
# print the JSON string representation of the object
print(NetworkReportSpecDimensionFilter.to_json())

# convert the object into a dict
network_report_spec_dimension_filter_dict = network_report_spec_dimension_filter_instance.to_dict()
# create an instance of NetworkReportSpecDimensionFilter from a dict
network_report_spec_dimension_filter_from_dict = NetworkReportSpecDimensionFilter.from_dict(network_report_spec_dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


