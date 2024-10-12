# GoogleCloudDocumentaiV1beta3DatasetSchema

Dataset Schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_schema** | [**GoogleCloudDocumentaiV1beta3DocumentSchema**](GoogleCloudDocumentaiV1beta3DocumentSchema.md) |  | [optional] 
**name** | **str** | Dataset schema resource name. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/dataset/datasetSchema&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_dataset_schema import GoogleCloudDocumentaiV1beta3DatasetSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DatasetSchema from a JSON string
google_cloud_documentai_v1beta3_dataset_schema_instance = GoogleCloudDocumentaiV1beta3DatasetSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DatasetSchema.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_dataset_schema_dict = google_cloud_documentai_v1beta3_dataset_schema_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DatasetSchema from a dict
google_cloud_documentai_v1beta3_dataset_schema_from_dict = GoogleCloudDocumentaiV1beta3DatasetSchema.from_dict(google_cloud_documentai_v1beta3_dataset_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


