# ImportExportResponseProperties

Response for Import/Export Status operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_uri** | **str** | The blob uri. | [optional] [readonly] 
**database_name** | **str** | The name of the database. | [optional] [readonly] 
**error_message** | **str** | The error message returned from the server. | [optional] [readonly] 
**last_modified_time** | **str** | The operation status last modified time. | [optional] [readonly] 
**queued_time** | **str** | The operation queued time. | [optional] [readonly] 
**request_id** | **str** | The request type of the operation. | [optional] [readonly] 
**request_type** | **str** | The request type of the operation. | [optional] [readonly] 
**server_name** | **str** | The name of the server. | [optional] [readonly] 
**status** | **str** | The status message returned from the server. | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_export_response_properties import ImportExportResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportResponseProperties from a JSON string
import_export_response_properties_instance = ImportExportResponseProperties.from_json(json)
# print the JSON string representation of the object
print(ImportExportResponseProperties.to_json())

# convert the object into a dict
import_export_response_properties_dict = import_export_response_properties_instance.to_dict()
# create an instance of ImportExportResponseProperties from a dict
import_export_response_properties_from_dict = ImportExportResponseProperties.from_dict(import_export_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


