# GoogleCloudRetailV2OutputConfig

The output configuration setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudRetailV2OutputConfigBigQueryDestination**](GoogleCloudRetailV2OutputConfigBigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudRetailV2OutputConfigGcsDestination**](GoogleCloudRetailV2OutputConfigGcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_output_config import GoogleCloudRetailV2OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2OutputConfig from a JSON string
google_cloud_retail_v2_output_config_instance = GoogleCloudRetailV2OutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2OutputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2_output_config_dict = google_cloud_retail_v2_output_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2OutputConfig from a dict
google_cloud_retail_v2_output_config_from_dict = GoogleCloudRetailV2OutputConfig.from_dict(google_cloud_retail_v2_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


