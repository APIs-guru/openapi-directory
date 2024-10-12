# IngestionInfo

Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_ingestion_address** | **str** | The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL. | [optional] 
**ingestion_address** | **str** | The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME*  | [optional] 
**rtmps_backup_ingestion_address** | **str** | This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. | [optional] 
**rtmps_ingestion_address** | **str** | This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. | [optional] 
**stream_name** | **str** | The stream name that YouTube assigns to the video stream. | [optional] 

## Example

```python
from openapi_client.models.ingestion_info import IngestionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IngestionInfo from a JSON string
ingestion_info_instance = IngestionInfo.from_json(json)
# print the JSON string representation of the object
print(IngestionInfo.to_json())

# convert the object into a dict
ingestion_info_dict = ingestion_info_instance.to_dict()
# create an instance of IngestionInfo from a dict
ingestion_info_from_dict = IngestionInfo.from_dict(ingestion_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


