# GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment

Metadata for active serving config A/B tests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**experiment_serving_config** | **str** | The fully qualified resource name of the serving config VariantArm.serving_config_id responsible for generating the search response. For example: &#x60;projects/*/locations/*/catalogs/*/servingConfigs/*&#x60;. | [optional] 
**original_serving_config** | **str** | The fully qualified resource name of the original SearchRequest.placement in the search request prior to reassignment by experiment API. For example: &#x60;projects/*/locations/*/catalogs/*/servingConfigs/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_experiment_info_serving_config_experiment import GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment from a JSON string
google_cloud_retail_v2alpha_experiment_info_serving_config_experiment_instance = GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_experiment_info_serving_config_experiment_dict = google_cloud_retail_v2alpha_experiment_info_serving_config_experiment_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment from a dict
google_cloud_retail_v2alpha_experiment_info_serving_config_experiment_from_dict = GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment.from_dict(google_cloud_retail_v2alpha_experiment_info_serving_config_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


