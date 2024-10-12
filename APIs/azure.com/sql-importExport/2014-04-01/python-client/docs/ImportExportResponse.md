# ImportExportResponse

Response for Import/Export Get operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ImportExportResponseProperties**](ImportExportResponseProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_export_response import ImportExportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportResponse from a JSON string
import_export_response_instance = ImportExportResponse.from_json(json)
# print the JSON string representation of the object
print(ImportExportResponse.to_json())

# convert the object into a dict
import_export_response_dict = import_export_response_instance.to_dict()
# create an instance of ImportExportResponse from a dict
import_export_response_from_dict = ImportExportResponse.from_dict(import_export_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


