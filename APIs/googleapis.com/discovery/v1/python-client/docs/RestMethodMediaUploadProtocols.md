# RestMethodMediaUploadProtocols

Supported upload protocols.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resumable** | [**RestMethodMediaUploadProtocolsResumable**](RestMethodMediaUploadProtocolsResumable.md) |  | [optional] 
**simple** | [**RestMethodMediaUploadProtocolsSimple**](RestMethodMediaUploadProtocolsSimple.md) |  | [optional] 

## Example

```python
from openapi_client.models.rest_method_media_upload_protocols import RestMethodMediaUploadProtocols

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethodMediaUploadProtocols from a JSON string
rest_method_media_upload_protocols_instance = RestMethodMediaUploadProtocols.from_json(json)
# print the JSON string representation of the object
print(RestMethodMediaUploadProtocols.to_json())

# convert the object into a dict
rest_method_media_upload_protocols_dict = rest_method_media_upload_protocols_instance.to_dict()
# create an instance of RestMethodMediaUploadProtocols from a dict
rest_method_media_upload_protocols_from_dict = RestMethodMediaUploadProtocols.from_dict(rest_method_media_upload_protocols_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


