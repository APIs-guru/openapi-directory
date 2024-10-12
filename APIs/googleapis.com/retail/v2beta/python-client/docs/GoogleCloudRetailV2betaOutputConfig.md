# GoogleCloudRetailV2betaOutputConfig

The output configuration setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudRetailV2betaOutputConfigBigQueryDestination**](GoogleCloudRetailV2betaOutputConfigBigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudRetailV2betaOutputConfigGcsDestination**](GoogleCloudRetailV2betaOutputConfigGcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_output_config import GoogleCloudRetailV2betaOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaOutputConfig from a JSON string
google_cloud_retail_v2beta_output_config_instance = GoogleCloudRetailV2betaOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaOutputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_output_config_dict = google_cloud_retail_v2beta_output_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaOutputConfig from a dict
google_cloud_retail_v2beta_output_config_from_dict = GoogleCloudRetailV2betaOutputConfig.from_dict(google_cloud_retail_v2beta_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


