# CreateImportResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**import_task** | [**ImportTask**](ImportTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_import_response import CreateImportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateImportResponse from a JSON string
create_import_response_instance = CreateImportResponse.from_json(json)
# print the JSON string representation of the object
print(CreateImportResponse.to_json())

# convert the object into a dict
create_import_response_dict = create_import_response_instance.to_dict()
# create an instance of CreateImportResponse from a dict
create_import_response_from_dict = CreateImportResponse.from_dict(create_import_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


