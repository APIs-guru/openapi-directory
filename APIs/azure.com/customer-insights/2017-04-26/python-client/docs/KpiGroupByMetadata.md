# KpiGroupByMetadata

The KPI GroupBy field metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **Dict[str, str]** | The display name. | [optional] 
**field_name** | **str** | The name of the field. | [optional] 
**field_type** | **str** | The type of the field. | [optional] 

## Example

```python
from openapi_client.models.kpi_group_by_metadata import KpiGroupByMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of KpiGroupByMetadata from a JSON string
kpi_group_by_metadata_instance = KpiGroupByMetadata.from_json(json)
# print the JSON string representation of the object
print(KpiGroupByMetadata.to_json())

# convert the object into a dict
kpi_group_by_metadata_dict = kpi_group_by_metadata_instance.to_dict()
# create an instance of KpiGroupByMetadata from a dict
kpi_group_by_metadata_from_dict = KpiGroupByMetadata.from_dict(kpi_group_by_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


