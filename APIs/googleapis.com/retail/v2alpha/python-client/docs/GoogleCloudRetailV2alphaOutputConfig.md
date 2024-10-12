# GoogleCloudRetailV2alphaOutputConfig

The output configuration setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudRetailV2alphaOutputConfigBigQueryDestination**](GoogleCloudRetailV2alphaOutputConfigBigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudRetailV2alphaOutputConfigGcsDestination**](GoogleCloudRetailV2alphaOutputConfigGcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_output_config import GoogleCloudRetailV2alphaOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaOutputConfig from a JSON string
google_cloud_retail_v2alpha_output_config_instance = GoogleCloudRetailV2alphaOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaOutputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_output_config_dict = google_cloud_retail_v2alpha_output_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaOutputConfig from a dict
google_cloud_retail_v2alpha_output_config_from_dict = GoogleCloudRetailV2alphaOutputConfig.from_dict(google_cloud_retail_v2alpha_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


