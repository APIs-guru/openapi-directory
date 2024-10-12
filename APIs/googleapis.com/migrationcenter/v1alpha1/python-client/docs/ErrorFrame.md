# ErrorFrame

Message representing a frame which failed to be processed due to an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingestion_time** | **str** | Output only. Frame ingestion time. | [optional] [readonly] 
**name** | **str** | Output only. The identifier of the ErrorFrame. | [optional] [readonly] 
**original_frame** | [**AssetFrame**](AssetFrame.md) |  | [optional] 
**violations** | [**List[FrameViolationEntry]**](FrameViolationEntry.md) | Output only. All the violations that were detected for the frame. | [optional] [readonly] 

## Example

```python
from openapi_client.models.error_frame import ErrorFrame

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorFrame from a JSON string
error_frame_instance = ErrorFrame.from_json(json)
# print the JSON string representation of the object
print(ErrorFrame.to_json())

# convert the object into a dict
error_frame_dict = error_frame_instance.to_dict()
# create an instance of ErrorFrame from a dict
error_frame_from_dict = ErrorFrame.from_dict(error_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


