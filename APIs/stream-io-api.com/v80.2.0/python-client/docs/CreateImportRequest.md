# CreateImportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** |  | [optional] 
**path** | **str** |  | 

## Example

```python
from openapi_client.models.create_import_request import CreateImportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateImportRequest from a JSON string
create_import_request_instance = CreateImportRequest.from_json(json)
# print the JSON string representation of the object
print(CreateImportRequest.to_json())

# convert the object into a dict
create_import_request_dict = create_import_request_instance.to_dict()
# create an instance of CreateImportRequest from a dict
create_import_request_from_dict = CreateImportRequest.from_dict(create_import_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


