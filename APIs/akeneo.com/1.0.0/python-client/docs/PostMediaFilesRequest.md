# PostMediaFilesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The binaries of the file | 
**product** | **str** | The product to which the media file will be associated. It is a JSON string that follows this format &#39;{\&quot;identifier\&quot;:\&quot;product_identifier\&quot;, \&quot;attribute\&quot;:\&quot;attribute_code\&quot;, \&quot;scope\&quot;:\&quot;channel_code\&quot;,\&quot;locale\&quot;:\&quot;locale_code\&quot;}&#39;. You have to either use this field or the &#x60;product_model&#x60; field, but not both at the same time. | [optional] 
**product_model** | **str** | The product model to which the media file will be associated. It is a JSON string that follows this format &#39;{\&quot;code\&quot;:\&quot;product_model_code\&quot;, \&quot;attribute\&quot;:\&quot;attribute_code\&quot;, \&quot;scope\&quot;:\&quot;channel_code\&quot;,\&quot;locale\&quot;:\&quot;locale_code\&quot;}&#39;. You have to either use this field or the &#x60;product&#x60; field, but not both at the same time. | [optional] 

## Example

```python
from openapi_client.models.post_media_files_request import PostMediaFilesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostMediaFilesRequest from a JSON string
post_media_files_request_instance = PostMediaFilesRequest.from_json(json)
# print the JSON string representation of the object
print(PostMediaFilesRequest.to_json())

# convert the object into a dict
post_media_files_request_dict = post_media_files_request_instance.to_dict()
# create an instance of PostMediaFilesRequest from a dict
post_media_files_request_from_dict = PostMediaFilesRequest.from_dict(post_media_files_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


