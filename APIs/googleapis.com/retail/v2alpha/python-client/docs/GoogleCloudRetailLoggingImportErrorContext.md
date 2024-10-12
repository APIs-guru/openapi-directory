# GoogleCloudRetailLoggingImportErrorContext

The error payload that is populated on LRO import APIs, including \"google.cloud.retail.v2.ProductService.ImportProducts\" and \"google.cloud.retail.v2.EventService.ImportUserEvents\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_item** | **str** | The detailed content which caused the error on importing a catalog item. | [optional] 
**gcs_path** | **str** | Cloud Storage file path of the import source. Can be set for batch operation error. | [optional] 
**line_number** | **str** | Line number of the content in file. Should be empty for permission or batch operation error. | [optional] 
**operation_name** | **str** | The operation resource name of the LRO. | [optional] 
**product** | **str** | The detailed content which caused the error on importing a product. | [optional] 
**user_event** | **str** | The detailed content which caused the error on importing a user event. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_logging_import_error_context import GoogleCloudRetailLoggingImportErrorContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailLoggingImportErrorContext from a JSON string
google_cloud_retail_logging_import_error_context_instance = GoogleCloudRetailLoggingImportErrorContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailLoggingImportErrorContext.to_json())

# convert the object into a dict
google_cloud_retail_logging_import_error_context_dict = google_cloud_retail_logging_import_error_context_instance.to_dict()
# create an instance of GoogleCloudRetailLoggingImportErrorContext from a dict
google_cloud_retail_logging_import_error_context_from_dict = GoogleCloudRetailLoggingImportErrorContext.from_dict(google_cloud_retail_logging_import_error_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


