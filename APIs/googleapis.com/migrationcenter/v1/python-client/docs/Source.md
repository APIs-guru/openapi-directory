# Source

Source represents an object from which asset information is streamed to Migration Center.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the source was created. | [optional] [readonly] 
**description** | **str** | Free-text description. | [optional] 
**display_name** | **str** | User-friendly display name. | [optional] 
**error_frame_count** | **int** | Output only. The number of frames that were reported by the source and contained errors. | [optional] [readonly] 
**managed** | **bool** | If &#x60;true&#x60;, the source is managed by other service(s). | [optional] 
**name** | **str** | Output only. The full name of the source. | [optional] [readonly] 
**pending_frame_count** | **int** | Output only. Number of frames that are still being processed. | [optional] [readonly] 
**priority** | **int** | The information confidence of the source. The higher the value, the higher the confidence. | [optional] 
**state** | **str** | Output only. The state of the source. | [optional] [readonly] 
**type** | **str** | Data source type. | [optional] 
**update_time** | **str** | Output only. The timestamp when the source was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


