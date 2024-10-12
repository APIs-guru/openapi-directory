# CreateImportURLResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**path** | **str** |  | 
**upload_url** | **str** |  | 

## Example

```python
from openapi_client.models.create_import_url_response import CreateImportURLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateImportURLResponse from a JSON string
create_import_url_response_instance = CreateImportURLResponse.from_json(json)
# print the JSON string representation of the object
print(CreateImportURLResponse.to_json())

# convert the object into a dict
create_import_url_response_dict = create_import_url_response_instance.to_dict()
# create an instance of CreateImportURLResponse from a dict
create_import_url_response_from_dict = CreateImportURLResponse.from_dict(create_import_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


