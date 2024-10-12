# DiffUploadResponse

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_version** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**original_object** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 

## Example

```python
from openapi_client.models.diff_upload_response import DiffUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiffUploadResponse from a JSON string
diff_upload_response_instance = DiffUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DiffUploadResponse.to_json())

# convert the object into a dict
diff_upload_response_dict = diff_upload_response_instance.to_dict()
# create an instance of DiffUploadResponse from a dict
diff_upload_response_from_dict = DiffUploadResponse.from_dict(diff_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


