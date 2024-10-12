# PivotTable

A pivot table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[PivotGroup]**](PivotGroup.md) | Each column grouping in the pivot table. | [optional] 
**criteria** | [**Dict[str, PivotFilterCriteria]**](PivotFilterCriteria.md) | An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map&#39;s key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was &#x60;C10:E15&#x60;, a key of &#x60;0&#x60; will have the filter for column &#x60;C&#x60;, whereas the key &#x60;1&#x60; is for column &#x60;D&#x60;. This field is deprecated in favor of filter_specs. | [optional] 
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source_id** | **str** | The ID of the data source the pivot table is reading data from. | [optional] 
**filter_specs** | [**List[PivotFilterSpec]**](PivotFilterSpec.md) | The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. | [optional] 
**rows** | [**List[PivotGroup]**](PivotGroup.md) | Each row grouping in the pivot table. | [optional] 
**source** | [**GridRange**](GridRange.md) |  | [optional] 
**value_layout** | **str** | Whether values should be listed horizontally (as columns) or vertically (as rows). | [optional] 
**values** | [**List[PivotValue]**](PivotValue.md) | A list of values to include in the pivot table. | [optional] 

## Example

```python
from openapi_client.models.pivot_table import PivotTable

# TODO update the JSON string below
json = "{}"
# create an instance of PivotTable from a JSON string
pivot_table_instance = PivotTable.from_json(json)
# print the JSON string representation of the object
print(PivotTable.to_json())

# convert the object into a dict
pivot_table_dict = pivot_table_instance.to_dict()
# create an instance of PivotTable from a dict
pivot_table_from_dict = PivotTable.from_dict(pivot_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


