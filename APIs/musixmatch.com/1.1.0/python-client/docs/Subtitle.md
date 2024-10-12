# Subtitle

a synchronized lyrics subtitle in the Musixmatch database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_tracking_url** | **str** |  | [optional] 
**lyrics_copyright** | **str** |  | [optional] 
**pixel_tracking_url** | **str** |  | [optional] 
**publisher_list** | **List[str]** |  | [optional] 
**restricted** | **float** |  | [optional] 
**script_tracking_url** | **str** |  | [optional] 
**subtitle_body** | **str** |  | [optional] 
**subtitle_id** | **float** |  | [optional] 
**subtitle_language** | **str** |  | [optional] 
**subtitle_language_description** | **str** |  | [optional] 
**subtitle_length** | **float** |  | [optional] 
**updated_time** | **str** |  | [optional] 
**writer_list** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.subtitle import Subtitle

# TODO update the JSON string below
json = "{}"
# create an instance of Subtitle from a JSON string
subtitle_instance = Subtitle.from_json(json)
# print the JSON string representation of the object
print(Subtitle.to_json())

# convert the object into a dict
subtitle_dict = subtitle_instance.to_dict()
# create an instance of Subtitle from a dict
subtitle_from_dict = Subtitle.from_dict(subtitle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


