# GoogleCloudDocumentaiV1beta3Dataset

A singleton resource under a Processor which configures a collection of documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_warehouse_config** | [**GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig**](GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig.md) |  | [optional] 
**gcs_managed_config** | [**GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfig**](GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfig.md) |  | [optional] 
**name** | **str** | Dataset resource name. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/dataset&#x60; | [optional] 
**spanner_indexing_config** | **object** | Configuration specific to spanner-based indexing. | [optional] 
**state** | **str** | Required. State of the dataset. Ignored when updating dataset. | [optional] 
**unmanaged_dataset_config** | **object** | Configuration specific to an unmanaged dataset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_dataset import GoogleCloudDocumentaiV1beta3Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3Dataset from a JSON string
google_cloud_documentai_v1beta3_dataset_instance = GoogleCloudDocumentaiV1beta3Dataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3Dataset.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_dataset_dict = google_cloud_documentai_v1beta3_dataset_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3Dataset from a dict
google_cloud_documentai_v1beta3_dataset_from_dict = GoogleCloudDocumentaiV1beta3Dataset.from_dict(google_cloud_documentai_v1beta3_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


