# GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel

An individual panel with a list of ServingConfigs to consider for it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate]**](GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate.md) | Required. The candidates to consider on the panel. | [optional] 
**default_candidate** | [**GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate**](GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate.md) |  | [optional] 
**display_name** | **str** | Optional. The name to display for the panel. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_model_page_optimization_config_panel import GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel from a JSON string
google_cloud_retail_v2alpha_model_page_optimization_config_panel_instance = GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_model_page_optimization_config_panel_dict = google_cloud_retail_v2alpha_model_page_optimization_config_panel_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel from a dict
google_cloud_retail_v2alpha_model_page_optimization_config_panel_from_dict = GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.from_dict(google_cloud_retail_v2alpha_model_page_optimization_config_panel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


