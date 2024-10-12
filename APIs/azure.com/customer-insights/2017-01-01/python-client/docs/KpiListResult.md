# KpiListResult

The response of list KPI operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[KpiResourceFormat]**](KpiResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.kpi_list_result import KpiListResult

# TODO update the JSON string below
json = "{}"
# create an instance of KpiListResult from a JSON string
kpi_list_result_instance = KpiListResult.from_json(json)
# print the JSON string representation of the object
print(KpiListResult.to_json())

# convert the object into a dict
kpi_list_result_dict = kpi_list_result_instance.to_dict()
# create an instance of KpiListResult from a dict
kpi_list_result_from_dict = KpiListResult.from_dict(kpi_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


