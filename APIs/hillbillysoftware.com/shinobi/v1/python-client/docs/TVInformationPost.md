# TVInformationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**episode_count** | **str** |  | [optional] 
**episode_runtime** | **str** |  | [optional] 
**genres** | **str** |  | [optional] 
**imdb_id** | **str** |  | [optional] 
**premier_year** | **str** |  | [optional] 
**seasons** | **str** |  | [optional] 
**show_image** | **str** |  | [optional] 
**show_status** | **str** |  | [optional] 
**synopsis** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tv_information_post import TVInformationPost

# TODO update the JSON string below
json = "{}"
# create an instance of TVInformationPost from a JSON string
tv_information_post_instance = TVInformationPost.from_json(json)
# print the JSON string representation of the object
print(TVInformationPost.to_json())

# convert the object into a dict
tv_information_post_dict = tv_information_post_instance.to_dict()
# create an instance of TVInformationPost from a dict
tv_information_post_from_dict = TVInformationPost.from_dict(tv_information_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


