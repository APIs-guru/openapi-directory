# GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate

A candidate to consider for a given panel. Currently only ServingConfig are valid candidates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serving_config_id** | **str** | This has to be a valid ServingConfig identifier. For example, for a ServingConfig with full name: &#x60;projects/*/locations/global/catalogs/default_catalog/servingConfigs/my_candidate_config&#x60;, this would be &#x60;my_candidate_config&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_model_page_optimization_config_candidate import GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate from a JSON string
google_cloud_retail_v2alpha_model_page_optimization_config_candidate_instance = GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_model_page_optimization_config_candidate_dict = google_cloud_retail_v2alpha_model_page_optimization_config_candidate_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate from a dict
google_cloud_retail_v2alpha_model_page_optimization_config_candidate_from_dict = GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate.from_dict(google_cloud_retail_v2alpha_model_page_optimization_config_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


