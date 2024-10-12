# GoogleCloudDiscoveryengineV1betaImportDocumentsRequest

Request message for Import methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_generate_ids** | **bool** | Whether to automatically generate IDs for the documents if absent. If set to &#x60;true&#x60;, Document.ids are automatically generated based on the hash of the payload, where IDs may not be consistent during multiple imports. In which case ReconciliationMode.FULL is highly recommended to avoid duplicate contents. If unset or set to &#x60;false&#x60;, Document.ids have to be specified using id_field, otherwise, documents without IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is &#x60;custom&#x60; or &#x60;csv&#x60;. Otherwise, an INVALID_ARGUMENT error is thrown. | [optional] 
**bigquery_source** | [**GoogleCloudDiscoveryengineV1betaBigQuerySource**](GoogleCloudDiscoveryengineV1betaBigQuerySource.md) |  | [optional] 
**error_config** | [**GoogleCloudDiscoveryengineV1betaImportErrorConfig**](GoogleCloudDiscoveryengineV1betaImportErrorConfig.md) |  | [optional] 
**gcs_source** | [**GoogleCloudDiscoveryengineV1betaGcsSource**](GoogleCloudDiscoveryengineV1betaGcsSource.md) |  | [optional] 
**id_field** | **str** | The field in the Cloud Storage and BigQuery sources that indicates the unique IDs of the documents. For GcsSource it is the key of the JSON field. For instance, &#x60;my_id&#x60; for JSON &#x60;{\&quot;my_id\&quot;: \&quot;some_uuid\&quot;}&#x60;. For BigQuerySource it is the column name of the BigQuery table where the unique ids are stored. The values of the JSON field or the BigQuery column are used as the Document.ids. The JSON field or the BigQuery column must be of string type, and the values must be set as valid strings conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with 1-63 characters. Otherwise, documents without valid IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is &#x60;custom&#x60;. And only set this field when auto_generate_ids is unset or set as &#x60;false&#x60;. Otherwise, an INVALID_ARGUMENT error is thrown. If it is unset, a default value &#x60;_id&#x60; is used when importing from the allowed data sources. | [optional] 
**inline_source** | [**GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource**](GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource.md) |  | [optional] 
**reconciliation_mode** | **str** | The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_import_documents_request import GoogleCloudDiscoveryengineV1betaImportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaImportDocumentsRequest from a JSON string
google_cloud_discoveryengine_v1beta_import_documents_request_instance = GoogleCloudDiscoveryengineV1betaImportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaImportDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_import_documents_request_dict = google_cloud_discoveryengine_v1beta_import_documents_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaImportDocumentsRequest from a dict
google_cloud_discoveryengine_v1beta_import_documents_request_from_dict = GoogleCloudDiscoveryengineV1betaImportDocumentsRequest.from_dict(google_cloud_discoveryengine_v1beta_import_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


