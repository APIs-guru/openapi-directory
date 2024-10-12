# TagsListResponseInner


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
from openapi_client.models.tags_list_response_inner import TagsListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagsListResponseInner from a JSON string
tags_list_response_inner_instance = TagsListResponseInner.from_json(json)
# print the JSON string representation of the object
print(TagsListResponseInner.to_json())

# convert the object into a dict
tags_list_response_inner_dict = tags_list_response_inner_instance.to_dict()
# create an instance of TagsListResponseInner from a dict
tags_list_response_inner_from_dict = TagsListResponseInner.from_dict(tags_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


