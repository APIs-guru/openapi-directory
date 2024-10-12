# GoogleCloudRetailV2alphaImportErrorsConfig

Configuration of destination for Import related errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_prefix** | **str** | Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded &#x60;google.rpc.Status&#x60; message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_import_errors_config import GoogleCloudRetailV2alphaImportErrorsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaImportErrorsConfig from a JSON string
google_cloud_retail_v2alpha_import_errors_config_instance = GoogleCloudRetailV2alphaImportErrorsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaImportErrorsConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_import_errors_config_dict = google_cloud_retail_v2alpha_import_errors_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaImportErrorsConfig from a dict
google_cloud_retail_v2alpha_import_errors_config_from_dict = GoogleCloudRetailV2alphaImportErrorsConfig.from_dict(google_cloud_retail_v2alpha_import_errors_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


