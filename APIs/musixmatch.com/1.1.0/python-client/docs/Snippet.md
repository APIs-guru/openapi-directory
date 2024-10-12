# Snippet

Snippet of lyrics text in the Musixmatch database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_tracking_url** | **str** |  | [optional] 
**instrumental** | **float** |  | [optional] 
**pixel_tracking_url** | **str** |  | [optional] 
**restricted** | **float** |  | [optional] 
**script_tracking_url** | **str** |  | [optional] 
**snippet_body** | **str** |  | [optional] 
**snippet_id** | **float** |  | [optional] 
**snippet_language** | **str** |  | [optional] 
**updated_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.snippet import Snippet

# TODO update the JSON string below
json = "{}"
# create an instance of Snippet from a JSON string
snippet_instance = Snippet.from_json(json)
# print the JSON string representation of the object
print(Snippet.to_json())

# convert the object into a dict
snippet_dict = snippet_instance.to_dict()
# create an instance of Snippet from a dict
snippet_from_dict = Snippet.from_dict(snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


