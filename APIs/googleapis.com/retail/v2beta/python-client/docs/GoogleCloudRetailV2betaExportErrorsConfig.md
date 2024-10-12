# GoogleCloudRetailV2betaExportErrorsConfig

Configuration of destination for Export related errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_prefix** | **str** | Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded &#x60;google.rpc.Status&#x60; message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_export_errors_config import GoogleCloudRetailV2betaExportErrorsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaExportErrorsConfig from a JSON string
google_cloud_retail_v2beta_export_errors_config_instance = GoogleCloudRetailV2betaExportErrorsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaExportErrorsConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_export_errors_config_dict = google_cloud_retail_v2beta_export_errors_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaExportErrorsConfig from a dict
google_cloud_retail_v2beta_export_errors_config_from_dict = GoogleCloudRetailV2betaExportErrorsConfig.from_dict(google_cloud_retail_v2beta_export_errors_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


