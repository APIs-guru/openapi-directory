# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig

Configuration that defines the hierarchical relationship of time series and parameters for hierarchical forecasting strategies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_columns** | **List[str]** | A list of time series attribute column names that define the time series hierarchy. Only one level of hierarchy is supported, ex. &#39;region&#39; for a hierarchy of stores or &#39;department&#39; for a hierarchy of products. If multiple columns are specified, time series will be grouped by their combined values, ex. (&#39;blue&#39;, &#39;large&#39;) for &#39;color&#39; and &#39;size&#39;, up to 5 columns are accepted. If no group columns are specified, all time series are considered to be part of the same group. | [optional] 
**group_temporal_total_weight** | **float** | The weight of the loss for predictions aggregated over both the horizon and time series in the same hierarchy group. | [optional] 
**group_total_weight** | **float** | The weight of the loss for predictions aggregated over time series in the same group. | [optional] 
**temporal_total_weight** | **float** | The weight of the loss for predictions aggregated over the horizon for a single time series. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hierarchy_config import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hierarchy_config_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hierarchy_config_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hierarchy_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hierarchy_config_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hierarchy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


