# MediaResponseInfo

This message is for backends to pass their scotty media specific fields to ESF. Backend will include this in their response message to ESF. Example: ExportFile is an rpc defined for upload using scotty from ESF. rpc ExportFile(ExportFileRequest) returns (ExportFileResponse) Message ExportFileResponse will include apiserving.MediaResponseInfo to tell ESF about data like dynamic_dropzone it needs to pass to Scotty. message ExportFileResponse { optional gdata.Media blob = 1; optional apiserving.MediaResponseInfo media_response_info = 2 }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_data** | **str** | Data to copy from backend response to the next backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. | [optional] 
**data_storage_transform** | **bytearray** | Specifies any transformation to be applied to data before persisting it or retrieving from storage. E.g., encryption options for blobstore2. This should be of the form uploader_service.DataStorageTransform. | [optional] 
**dynamic_drop_target** | **bytearray** | Specifies the Scotty Drop Target to use for uploads. If present in a media response, Scotty does not upload to a standard drop zone. Instead, Scotty saves the upload directly to the location specified in this drop target. Unlike drop zones, the drop target is the final storage location for an upload. So, the agent does not need to clone the blob at the end of the upload. The agent is responsible for garbage collecting any orphaned blobs that may occur due to aborted uploads. For more information, see the drop target design doc here: http://goto/ScottyDropTarget This field will be preferred to dynamicDropzone. If provided, the identified field in the response must be of the type uploader.agent.DropTarget. | [optional] 
**dynamic_dropzone** | **str** | Specifies the Scotty dropzone to use for uploads. | [optional] 
**request_class** | **str** | Request class to use for all Blobstore operations for this request. | [optional] 
**scotty_agent_user_id** | **str** | Requester ID passed along to be recorded in the Scotty logs | [optional] 
**scotty_customer_log** | **bytearray** | Customer-specific data to be recorded in the Scotty logs type is logs_proto_scotty.CustomerLog | [optional] 
**traffic_class_field** | **str** | Specifies the TrafficClass that Scotty should use for any RPCs to fetch the response bytes. Will override the traffic class GTOS of the incoming http request. This is a temporary field to facilitate whitelisting and experimentation by the bigstore agent only. For instance, this does not apply to RTMP reads. WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM. | [optional] 
**verify_hash_from_header** | **bool** | Tells Scotty to verify hashes on the agent&#39;s behalf by parsing out the X-Goog-Hash header. | [optional] 

## Example

```python
from openapi_client.models.media_response_info import MediaResponseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MediaResponseInfo from a JSON string
media_response_info_instance = MediaResponseInfo.from_json(json)
# print the JSON string representation of the object
print(MediaResponseInfo.to_json())

# convert the object into a dict
media_response_info_dict = media_response_info_instance.to_dict()
# create an instance of MediaResponseInfo from a dict
media_response_info_from_dict = MediaResponseInfo.from_dict(media_response_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


