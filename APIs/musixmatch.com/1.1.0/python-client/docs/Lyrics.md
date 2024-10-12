# Lyrics

a Lyrics in the Musixmatch database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_requested** | **str** |  | [optional] 
**can_edit** | **float** |  | [optional] 
**explicit** | **float** |  | [optional] 
**html_tracking_url** | **str** |  | [optional] 
**instrumental** | **float** |  | [optional] 
**locked** | **float** |  | [optional] 
**lyrics_body** | **str** |  | [optional] 
**lyrics_copyright** | **str** |  | [optional] 
**lyrics_id** | **float** |  | [optional] 
**lyrics_language** | **str** |  | [optional] 
**lyrics_language_description** | **str** |  | [optional] 
**pixel_tracking_url** | **str** |  | [optional] 
**publisher_list** | **List[str]** |  | [optional] 
**restricted** | **float** |  | [optional] 
**script_tracking_url** | **str** |  | [optional] 
**updated_time** | **str** |  | [optional] 
**verified** | **float** |  | [optional] 
**writer_list** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.lyrics import Lyrics

# TODO update the JSON string below
json = "{}"
# create an instance of Lyrics from a JSON string
lyrics_instance = Lyrics.from_json(json)
# print the JSON string representation of the object
print(Lyrics.to_json())

# convert the object into a dict
lyrics_dict = lyrics_instance.to_dict()
# create an instance of Lyrics from a dict
lyrics_from_dict = Lyrics.from_dict(lyrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


