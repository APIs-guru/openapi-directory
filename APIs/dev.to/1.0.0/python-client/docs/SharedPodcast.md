# SharedPodcast

The podcast that the resource belongs to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | **str** | Podcast image url | [optional] 
**slug** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shared_podcast import SharedPodcast

# TODO update the JSON string below
json = "{}"
# create an instance of SharedPodcast from a JSON string
shared_podcast_instance = SharedPodcast.from_json(json)
# print the JSON string representation of the object
print(SharedPodcast.to_json())

# convert the object into a dict
shared_podcast_dict = shared_podcast_instance.to_dict()
# create an instance of SharedPodcast from a dict
shared_podcast_from_dict = SharedPodcast.from_dict(shared_podcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


