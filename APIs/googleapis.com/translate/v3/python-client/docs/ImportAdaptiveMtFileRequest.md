# ImportAdaptiveMtFileRequest

The request for importing an AdaptiveMt file along with its sentences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_input_source** | [**FileInputSource**](FileInputSource.md) |  | [optional] 
**gcs_input_source** | [**GcsInputSource**](GcsInputSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_adaptive_mt_file_request import ImportAdaptiveMtFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAdaptiveMtFileRequest from a JSON string
import_adaptive_mt_file_request_instance = ImportAdaptiveMtFileRequest.from_json(json)
# print the JSON string representation of the object
print(ImportAdaptiveMtFileRequest.to_json())

# convert the object into a dict
import_adaptive_mt_file_request_dict = import_adaptive_mt_file_request_instance.to_dict()
# create an instance of ImportAdaptiveMtFileRequest from a dict
import_adaptive_mt_file_request_from_dict = ImportAdaptiveMtFileRequest.from_dict(import_adaptive_mt_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


