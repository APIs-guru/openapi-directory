# KpiExtract

The KPI extract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | The expression. | 
**extract_name** | **str** | KPI extract name. | 

## Example

```python
from openapi_client.models.kpi_extract import KpiExtract

# TODO update the JSON string below
json = "{}"
# create an instance of KpiExtract from a JSON string
kpi_extract_instance = KpiExtract.from_json(json)
# print the JSON string representation of the object
print(KpiExtract.to_json())

# convert the object into a dict
kpi_extract_dict = kpi_extract_instance.to_dict()
# create an instance of KpiExtract from a dict
kpi_extract_from_dict = KpiExtract.from_dict(kpi_extract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


