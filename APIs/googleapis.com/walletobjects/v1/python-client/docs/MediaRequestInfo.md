# MediaRequestInfo

Extra information added to operations that support Scotty media requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_bytes** | **str** | The number of current bytes uploaded or downloaded. | [optional] 
**custom_data** | **str** | Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. | [optional] 
**diff_object_version** | **str** | Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary&#39;s mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. | [optional] 
**final_status** | **int** | The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l&#x3D;737&amp;rcl&#x3D;347601929 | [optional] 
**notification_type** | **str** | The type of notification received from Scotty. | [optional] 
**request_id** | **str** | The Scotty request ID. | [optional] 
**request_received_params_serving_info** | **bytearray** | The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() | [optional] 
**total_bytes** | **str** | The total size of the file. | [optional] 
**total_bytes_is_estimated** | **bool** | Whether the total bytes field contains an estimated data. | [optional] 

## Example

```python
from openapi_client.models.media_request_info import MediaRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MediaRequestInfo from a JSON string
media_request_info_instance = MediaRequestInfo.from_json(json)
# print the JSON string representation of the object
print(MediaRequestInfo.to_json())

# convert the object into a dict
media_request_info_dict = media_request_info_instance.to_dict()
# create an instance of MediaRequestInfo from a dict
media_request_info_from_dict = MediaRequestInfo.from_dict(media_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


