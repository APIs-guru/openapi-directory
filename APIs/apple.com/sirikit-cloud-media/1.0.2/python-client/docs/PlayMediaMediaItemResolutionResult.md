# PlayMediaMediaItemResolutionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | [optional] 
**confirmation_required** | **object** |  | [optional] 
**disambiguation** | **object** |  | [optional] 
**success** | **object** |  | [optional] 
**unsupported** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.play_media_media_item_resolution_result import PlayMediaMediaItemResolutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaMediaItemResolutionResult from a JSON string
play_media_media_item_resolution_result_instance = PlayMediaMediaItemResolutionResult.from_json(json)
# print the JSON string representation of the object
print(PlayMediaMediaItemResolutionResult.to_json())

# convert the object into a dict
play_media_media_item_resolution_result_dict = play_media_media_item_resolution_result_instance.to_dict()
# create an instance of PlayMediaMediaItemResolutionResult from a dict
play_media_media_item_resolution_result_from_dict = PlayMediaMediaItemResolutionResult.from_dict(play_media_media_item_resolution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


