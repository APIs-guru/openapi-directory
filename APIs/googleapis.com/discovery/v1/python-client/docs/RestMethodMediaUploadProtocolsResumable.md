# RestMethodMediaUploadProtocolsResumable

Supports the Resumable Media Upload protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multipart** | **bool** | True if this endpoint supports uploading multipart media. | [optional] [default to True]
**path** | **str** | The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. | [optional] 

## Example

```python
from openapi_client.models.rest_method_media_upload_protocols_resumable import RestMethodMediaUploadProtocolsResumable

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethodMediaUploadProtocolsResumable from a JSON string
rest_method_media_upload_protocols_resumable_instance = RestMethodMediaUploadProtocolsResumable.from_json(json)
# print the JSON string representation of the object
print(RestMethodMediaUploadProtocolsResumable.to_json())

# convert the object into a dict
rest_method_media_upload_protocols_resumable_dict = rest_method_media_upload_protocols_resumable_instance.to_dict()
# create an instance of RestMethodMediaUploadProtocolsResumable from a dict
rest_method_media_upload_protocols_resumable_from_dict = RestMethodMediaUploadProtocolsResumable.from_dict(rest_method_media_upload_protocols_resumable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


