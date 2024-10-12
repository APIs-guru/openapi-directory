# KpiProperties

Each KPI must contain a 'type' and 'enabled' key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | show the KPI in the UI? | [optional] 
**id** | **str** | ID of resource related to metric (budget). | [optional] 
**type** | **str** | KPI type (Forecast, Budget). | [optional] 

## Example

```python
from openapi_client.models.kpi_properties import KpiProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KpiProperties from a JSON string
kpi_properties_instance = KpiProperties.from_json(json)
# print the JSON string representation of the object
print(KpiProperties.to_json())

# convert the object into a dict
kpi_properties_dict = kpi_properties_instance.to_dict()
# create an instance of KpiProperties from a dict
kpi_properties_from_dict = KpiProperties.from_dict(kpi_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


