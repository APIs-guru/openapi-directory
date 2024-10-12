# GetImportResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**import_task** | [**ImportTask**](ImportTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_import_response import GetImportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetImportResponse from a JSON string
get_import_response_instance = GetImportResponse.from_json(json)
# print the JSON string representation of the object
print(GetImportResponse.to_json())

# convert the object into a dict
get_import_response_dict = get_import_response_instance.to_dict()
# create an instance of GetImportResponse from a dict
get_import_response_from_dict = GetImportResponse.from_dict(get_import_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


