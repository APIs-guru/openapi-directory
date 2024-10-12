# NetworkReportSpecSortCondition

Sorting direction to be applied on a dimension or a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Sort by the specified dimension. | [optional] 
**metric** | **str** | Sort by the specified metric. | [optional] 
**order** | **str** | Sorting order of the dimension or metric. | [optional] 

## Example

```python
from openapi_client.models.network_report_spec_sort_condition import NetworkReportSpecSortCondition

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkReportSpecSortCondition from a JSON string
network_report_spec_sort_condition_instance = NetworkReportSpecSortCondition.from_json(json)
# print the JSON string representation of the object
print(NetworkReportSpecSortCondition.to_json())

# convert the object into a dict
network_report_spec_sort_condition_dict = network_report_spec_sort_condition_instance.to_dict()
# create an instance of NetworkReportSpecSortCondition from a dict
network_report_spec_sort_condition_from_dict = NetworkReportSpecSortCondition.from_dict(network_report_spec_sort_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


