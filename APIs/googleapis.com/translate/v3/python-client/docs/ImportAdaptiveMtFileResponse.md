# ImportAdaptiveMtFileResponse

The response for importing an AdaptiveMtFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive_mt_file** | [**AdaptiveMtFile**](AdaptiveMtFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_adaptive_mt_file_response import ImportAdaptiveMtFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAdaptiveMtFileResponse from a JSON string
import_adaptive_mt_file_response_instance = ImportAdaptiveMtFileResponse.from_json(json)
# print the JSON string representation of the object
print(ImportAdaptiveMtFileResponse.to_json())

# convert the object into a dict
import_adaptive_mt_file_response_dict = import_adaptive_mt_file_response_instance.to_dict()
# create an instance of ImportAdaptiveMtFileResponse from a dict
import_adaptive_mt_file_response_from_dict = ImportAdaptiveMtFileResponse.from_dict(import_adaptive_mt_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


