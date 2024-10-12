# DiffUploadRequest

A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksums_info** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**object_info** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**object_version** | **str** | The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. | [optional] 

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


