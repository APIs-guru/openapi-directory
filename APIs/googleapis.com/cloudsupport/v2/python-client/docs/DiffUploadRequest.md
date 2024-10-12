# DiffUploadRequest

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksums_info** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**object_info** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**object_version** | **str** | # gdata.* are outside protos with mising documentation | [optional] 

## Example

```python
from openapi_client.models.diff_upload_request import DiffUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiffUploadRequest from a JSON string
diff_upload_request_instance = DiffUploadRequest.from_json(json)
# print the JSON string representation of the object
print(DiffUploadRequest.to_json())

# convert the object into a dict
diff_upload_request_dict = diff_upload_request_instance.to_dict()
# create an instance of DiffUploadRequest from a dict
diff_upload_request_from_dict = DiffUploadRequest.from_dict(diff_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


