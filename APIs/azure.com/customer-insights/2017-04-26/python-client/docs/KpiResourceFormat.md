# KpiResourceFormat

The KPI resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**KpiDefinition**](KpiDefinition.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.kpi_resource_format import KpiResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of KpiResourceFormat from a JSON string
kpi_resource_format_instance = KpiResourceFormat.from_json(json)
# print the JSON string representation of the object
print(KpiResourceFormat.to_json())

# convert the object into a dict
kpi_resource_format_dict = kpi_resource_format_instance.to_dict()
# create an instance of KpiResourceFormat from a dict
kpi_resource_format_from_dict = KpiResourceFormat.from_dict(kpi_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


