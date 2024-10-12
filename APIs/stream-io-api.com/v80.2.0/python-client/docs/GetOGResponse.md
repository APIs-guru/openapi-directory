# GetOGResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) |  | [optional] 
**asset_url** | **str** | URL of detected video or audio | [optional] 
**author_icon** | **str** |  | [optional] 
**author_link** | **str** | og:site | [optional] 
**author_name** | **str** | og:site_name | [optional] 
**color** | **str** |  | [optional] 
**duration** | **str** |  | 
**fallback** | **str** |  | [optional] 
**fields** | [**List[ModelField]**](ModelField.md) |  | [optional] 
**footer** | **str** |  | [optional] 
**footer_icon** | **str** |  | [optional] 
**giphy** | [**Images**](Images.md) |  | [optional] 
**image_url** | **str** | URL of detected image | [optional] 
**og_scrape_url** | **str** | extracted url from the text | [optional] 
**original_height** | **int** |  | [optional] 
**original_width** | **int** |  | [optional] 
**pretext** | **str** |  | [optional] 
**text** | **str** | og:description | [optional] 
**thumb_url** | **str** | URL of detected thumb image | [optional] 
**title** | **str** | og:title | [optional] 
**title_link** | **str** | og:url | [optional] 
**type** | **str** | Attachment type, could be empty, image, audio or video | [optional] 

## Example

```python
from openapi_client.models.get_og_response import GetOGResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOGResponse from a JSON string
get_og_response_instance = GetOGResponse.from_json(json)
# print the JSON string representation of the object
print(GetOGResponse.to_json())

# convert the object into a dict
get_og_response_dict = get_og_response_instance.to_dict()
# create an instance of GetOGResponse from a dict
get_og_response_from_dict = GetOGResponse.from_dict(get_og_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


