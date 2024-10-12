# StreamObject

A specific stream object (e.g a specific DB table).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_job** | [**BackfillJob**](BackfillJob.md) |  | [optional] 
**create_time** | **str** | Output only. The creation time of the object. | [optional] [readonly] 
**display_name** | **str** | Required. Display name. | [optional] 
**errors** | [**List[Error]**](Error.md) | Output only. Active errors on the object. | [optional] [readonly] 
**name** | **str** | Output only. The object&#39;s name. | [optional] [readonly] 
**source_object** | [**SourceObjectIdentifier**](SourceObjectIdentifier.md) |  | [optional] 
**update_time** | **str** | Output only. The last update time of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.stream_object import StreamObject

# TODO update the JSON string below
json = "{}"
# create an instance of StreamObject from a JSON string
stream_object_instance = StreamObject.from_json(json)
# print the JSON string representation of the object
print(StreamObject.to_json())

# convert the object into a dict
stream_object_dict = stream_object_instance.to_dict()
# create an instance of StreamObject from a dict
stream_object_from_dict = StreamObject.from_dict(stream_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


