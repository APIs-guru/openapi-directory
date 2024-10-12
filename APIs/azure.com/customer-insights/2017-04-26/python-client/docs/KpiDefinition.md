# KpiDefinition

Defines the KPI Threshold limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**List[KpiAlias]**](KpiAlias.md) | The aliases. | [optional] 
**calculation_window** | **str** | The calculation window. | 
**calculation_window_field_name** | **str** | Name of calculation window field. | [optional] 
**description** | **Dict[str, str]** | Localized description for the KPI. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name for the KPI. | [optional] 
**entity_type** | **str** | The mapping entity type. | 
**entity_type_name** | **str** | The mapping entity name. | 
**expression** | **str** | The computation expression for the KPI. | 
**extracts** | [**List[KpiExtract]**](KpiExtract.md) | The KPI extracts. | [optional] 
**filter** | **str** | The filter expression for the KPI. | [optional] 
**function** | **str** | The computation function for the KPI. | 
**group_by** | **List[str]** | the group by properties for the KPI. | [optional] 
**group_by_metadata** | [**List[KpiGroupByMetadata]**](KpiGroupByMetadata.md) | The KPI GroupByMetadata. | [optional] [readonly] 
**kpi_name** | **str** | The KPI name. | [optional] [readonly] 
**participant_profiles_metadata** | [**List[KpiParticipantProfilesMetadata]**](KpiParticipantProfilesMetadata.md) | The participant profiles. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 
**thres_holds** | [**KpiThresholds**](KpiThresholds.md) |  | [optional] 
**unit** | **str** | The unit of measurement for the KPI. | [optional] 

## Example

```python
from openapi_client.models.kpi_definition import KpiDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of KpiDefinition from a JSON string
kpi_definition_instance = KpiDefinition.from_json(json)
# print the JSON string representation of the object
print(KpiDefinition.to_json())

# convert the object into a dict
kpi_definition_dict = kpi_definition_instance.to_dict()
# create an instance of KpiDefinition from a dict
kpi_definition_from_dict = KpiDefinition.from_dict(kpi_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


