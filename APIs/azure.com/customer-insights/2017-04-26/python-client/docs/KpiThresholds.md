# KpiThresholds

Defines the KPI Threshold limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**increasing_kpi** | **bool** | Whether or not the KPI is an increasing KPI. | 
**lower_limit** | **float** | The lower threshold limit. | 
**upper_limit** | **float** | The upper threshold limit. | 

## Example

```python
from openapi_client.models.kpi_thresholds import KpiThresholds

# TODO update the JSON string below
json = "{}"
# create an instance of KpiThresholds from a JSON string
kpi_thresholds_instance = KpiThresholds.from_json(json)
# print the JSON string representation of the object
print(KpiThresholds.to_json())

# convert the object into a dict
kpi_thresholds_dict = kpi_thresholds_instance.to_dict()
# create an instance of KpiThresholds from a dict
kpi_thresholds_from_dict = KpiThresholds.from_dict(kpi_thresholds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


