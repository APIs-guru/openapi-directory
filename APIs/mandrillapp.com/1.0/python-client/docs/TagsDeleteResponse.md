# TagsDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **int** |  | [optional] 
**complaints** | **int** |  | [optional] 
**hard_bounces** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**rejects** | **int** |  | [optional] 
**reputation** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**soft_bounces** | **int** |  | [optional] 
**tag** | **str** |  | [optional] 
**unique_clicks** | **int** |  | [optional] 
**unique_opens** | **int** |  | [optional] 
**unsubs** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.tags_delete_response import TagsDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TagsDeleteResponse from a JSON string
tags_delete_response_instance = TagsDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(TagsDeleteResponse.to_json())

# convert the object into a dict
tags_delete_response_dict = tags_delete_response_instance.to_dict()
# create an instance of TagsDeleteResponse from a dict
tags_delete_response_from_dict = TagsDeleteResponse.from_dict(tags_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


