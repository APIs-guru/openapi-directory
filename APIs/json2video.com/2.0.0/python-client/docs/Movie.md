# Movie

Object defining the movie to be rendered

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache** | **bool** |  | [optional] [default to True]
**comment** | **str** | Used for adding your comments | [optional] 
**draft** | **bool** | Draft movies include a watermark. Check your plan how many draft and final movies you have | [optional] [default to True]
**elements** | [**List[MovieElementsInner]**](MovieElementsInner.md) |  | [optional] 
**exports** | **List[object]** | You can define different types of exports for your movie. Check the &lt;a href&#x3D;\&quot;https://json2video.com/docs/tutorial/exports\&quot;&gt;documentation&lt;/a&gt; for more information | [optional] 
**fps** | **int** | Frames per second | [optional] [default to 25]
**height** | **int** |  | [optional] [default to 360]
**quality** | **str** |  | [optional] [default to 'high']
**resolution** | **str** |  | [optional] 
**scenes** | [**List[Scene]**](Scene.md) |  | 
**settings** | **object** | Movie advanced settings | [optional] 
**width** | **int** |  | [optional] [default to 640]

## Example

```python
from openapi_client.models.movie import Movie

# TODO update the JSON string below
json = "{}"
# create an instance of Movie from a JSON string
movie_instance = Movie.from_json(json)
# print the JSON string representation of the object
print(Movie.to_json())

# convert the object into a dict
movie_dict = movie_instance.to_dict()
# create an instance of Movie from a dict
movie_from_dict = Movie.from_dict(movie_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


