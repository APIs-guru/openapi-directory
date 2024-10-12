# GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig

Configuration specific to the Document AI Warehouse-based implementation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | Output only. The collection in Document AI Warehouse associated with the dataset. | [optional] [readonly] 
**var_schema** | **str** | Output only. The schema in Document AI Warehouse associated with the dataset. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_dataset_document_warehouse_config import GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig from a JSON string
google_cloud_documentai_v1beta3_dataset_document_warehouse_config_instance = GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_dataset_document_warehouse_config_dict = google_cloud_documentai_v1beta3_dataset_document_warehouse_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig from a dict
google_cloud_documentai_v1beta3_dataset_document_warehouse_config_from_dict = GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig.from_dict(google_cloud_documentai_v1beta3_dataset_document_warehouse_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


