# KpiAlias

The KPI alias.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_name** | **str** | KPI alias name. | 
**expression** | **str** | The expression. | 

## Example

```python
from openapi_client.models.kpi_alias import KpiAlias

# TODO update the JSON string below
json = "{}"
# create an instance of KpiAlias from a JSON string
kpi_alias_instance = KpiAlias.from_json(json)
# print the JSON string representation of the object
print(KpiAlias.to_json())

# convert the object into a dict
kpi_alias_dict = kpi_alias_instance.to_dict()
# create an instance of KpiAlias from a dict
kpi_alias_from_dict = KpiAlias.from_dict(kpi_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


