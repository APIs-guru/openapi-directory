# WhatsAppOneOf4AllOfVideo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | Additional text to accompany the file. | [optional] 
**url** | **object** | The URL of the video attachment.  Supports &#x60;.mp4&#x60; and &#x60;.3gpp&#x60;. Note, only &#x60;H.264&#x60; video codec and &#x60;AAC&#x60; audio codec is supported.  | 

## Example

```python
from openapi_client.models.whats_app_one_of4_all_of_video import WhatsAppOneOf4AllOfVideo

# TODO update the JSON string below
json = "{}"
# create an instance of WhatsAppOneOf4AllOfVideo from a JSON string
whats_app_one_of4_all_of_video_instance = WhatsAppOneOf4AllOfVideo.from_json(json)
# print the JSON string representation of the object
print(WhatsAppOneOf4AllOfVideo.to_json())

# convert the object into a dict
whats_app_one_of4_all_of_video_dict = whats_app_one_of4_all_of_video_instance.to_dict()
# create an instance of WhatsAppOneOf4AllOfVideo from a dict
whats_app_one_of4_all_of_video_from_dict = WhatsAppOneOf4AllOfVideo.from_dict(whats_app_one_of4_all_of_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


