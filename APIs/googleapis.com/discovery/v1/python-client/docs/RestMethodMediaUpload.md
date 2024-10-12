# RestMethodMediaUpload

Media upload parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept** | **List[str]** | MIME Media Ranges for acceptable media uploads to this method. | [optional] 
**max_size** | **str** | Maximum size of a media upload, such as \&quot;1MB\&quot;, \&quot;2GB\&quot; or \&quot;3TB\&quot;. | [optional] 
**protocols** | [**RestMethodMediaUploadProtocols**](RestMethodMediaUploadProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.rest_method_media_upload import RestMethodMediaUpload

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethodMediaUpload from a JSON string
rest_method_media_upload_instance = RestMethodMediaUpload.from_json(json)
# print the JSON string representation of the object
print(RestMethodMediaUpload.to_json())

# convert the object into a dict
rest_method_media_upload_dict = rest_method_media_upload_instance.to_dict()
# create an instance of RestMethodMediaUpload from a dict
rest_method_media_upload_from_dict = RestMethodMediaUpload.from_dict(rest_method_media_upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


