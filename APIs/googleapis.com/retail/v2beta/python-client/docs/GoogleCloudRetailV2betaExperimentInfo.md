# GoogleCloudRetailV2betaExperimentInfo

Metadata for active A/B testing Experiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**experiment** | **str** | The fully qualified resource name of the experiment that provides the serving config under test, should an active experiment exist. For example: &#x60;projects/*/locations/global/catalogs/default_catalog/experiments/experiment_id&#x60; | [optional] 
**serving_config_experiment** | [**GoogleCloudRetailV2betaExperimentInfoServingConfigExperiment**](GoogleCloudRetailV2betaExperimentInfoServingConfigExperiment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_experiment_info import GoogleCloudRetailV2betaExperimentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaExperimentInfo from a JSON string
google_cloud_retail_v2beta_experiment_info_instance = GoogleCloudRetailV2betaExperimentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaExperimentInfo.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_experiment_info_dict = google_cloud_retail_v2beta_experiment_info_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaExperimentInfo from a dict
google_cloud_retail_v2beta_experiment_info_from_dict = GoogleCloudRetailV2betaExperimentInfo.from_dict(google_cloud_retail_v2beta_experiment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


