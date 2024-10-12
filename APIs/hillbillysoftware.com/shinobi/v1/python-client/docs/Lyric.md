# Lyric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_id** | **str** |  | [optional] 
**artist** | **str** |  | [optional] 
**lyrics** | **str** |  | [optional] 
**song** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.lyric import Lyric

# TODO update the JSON string below
json = "{}"
# create an instance of Lyric from a JSON string
lyric_instance = Lyric.from_json(json)
# print the JSON string representation of the object
print(Lyric.to_json())

# convert the object into a dict
lyric_dict = lyric_instance.to_dict()
# create an instance of Lyric from a dict
lyric_from_dict = Lyric.from_dict(lyric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


