# RestMethodMediaUploadProtocolsSimple

Supports uploading as a single HTTP request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multipart** | **bool** | True if this endpoint supports upload multipart media. | [optional] [default to True]
**path** | **str** | The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. | [optional] 

## Example

```python
from openapi_client.models.rest_method_media_upload_protocols_simple import RestMethodMediaUploadProtocolsSimple

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethodMediaUploadProtocolsSimple from a JSON string
rest_method_media_upload_protocols_simple_instance = RestMethodMediaUploadProtocolsSimple.from_json(json)
# print the JSON string representation of the object
print(RestMethodMediaUploadProtocolsSimple.to_json())

# convert the object into a dict
rest_method_media_upload_protocols_simple_dict = rest_method_media_upload_protocols_simple_instance.to_dict()
# create an instance of RestMethodMediaUploadProtocolsSimple from a dict
rest_method_media_upload_protocols_simple_from_dict = RestMethodMediaUploadProtocolsSimple.from_dict(rest_method_media_upload_protocols_simple_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


