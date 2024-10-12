# FileDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.file_delete_response import FileDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FileDeleteResponse from a JSON string
file_delete_response_instance = FileDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(FileDeleteResponse.to_json())

# convert the object into a dict
file_delete_response_dict = file_delete_response_instance.to_dict()
# create an instance of FileDeleteResponse from a dict
file_delete_response_from_dict = FileDeleteResponse.from_dict(file_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


