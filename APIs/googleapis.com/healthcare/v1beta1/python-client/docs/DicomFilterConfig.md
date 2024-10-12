# DicomFilterConfig

Specifies the filter configuration for DICOM resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_paths_gcs_uri** | **str** | The Cloud Storage location of the filter configuration file. The &#x60;gcs_uri&#x60; must be in the format &#x60;gs://bucket/path/to/object&#x60;. The filter configuration file must contain a list of resource paths separated by newline characters (\\n or \\r\\n). Each resource path must be in the format \&quot;/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]\&quot; The Cloud Healthcare API service account must have the &#x60;roles/storage.objectViewer&#x60; Cloud IAM role for this Cloud Storage location. | [optional] 

## Example

```python
from openapi_client.models.dicom_filter_config import DicomFilterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DicomFilterConfig from a JSON string
dicom_filter_config_instance = DicomFilterConfig.from_json(json)
# print the JSON string representation of the object
print(DicomFilterConfig.to_json())

# convert the object into a dict
dicom_filter_config_dict = dicom_filter_config_instance.to_dict()
# create an instance of DicomFilterConfig from a dict
dicom_filter_config_from_dict = DicomFilterConfig.from_dict(dicom_filter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


