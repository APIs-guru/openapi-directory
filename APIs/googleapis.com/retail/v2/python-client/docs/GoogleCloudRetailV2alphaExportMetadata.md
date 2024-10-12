# GoogleCloudRetailV2alphaExportMetadata

Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_export_metadata import GoogleCloudRetailV2alphaExportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaExportMetadata from a JSON string
google_cloud_retail_v2alpha_export_metadata_instance = GoogleCloudRetailV2alphaExportMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaExportMetadata.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_export_metadata_dict = google_cloud_retail_v2alpha_export_metadata_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaExportMetadata from a dict
google_cloud_retail_v2alpha_export_metadata_from_dict = GoogleCloudRetailV2alphaExportMetadata.from_dict(google_cloud_retail_v2alpha_export_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


