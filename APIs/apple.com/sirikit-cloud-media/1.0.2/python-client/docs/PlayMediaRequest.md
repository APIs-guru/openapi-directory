# PlayMediaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**Constraints**](Constraints.md) |  | 
**user_activity** | [**UserActivity**](UserActivity.md) |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.play_media_request import PlayMediaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaRequest from a JSON string
play_media_request_instance = PlayMediaRequest.from_json(json)
# print the JSON string representation of the object
print(PlayMediaRequest.to_json())

# convert the object into a dict
play_media_request_dict = play_media_request_instance.to_dict()
# create an instance of PlayMediaRequest from a dict
play_media_request_from_dict = PlayMediaRequest.from_dict(play_media_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


