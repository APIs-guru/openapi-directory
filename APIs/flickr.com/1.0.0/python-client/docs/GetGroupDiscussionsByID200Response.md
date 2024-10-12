# GetGroupDiscussionsByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iconfarm** | **float** |  | [optional] 
**iconserver** | **float** |  | [optional] 
**ispoolmoderated** | **bool** |  | [optional] 
**lang** | **str** |  | [optional] 
**members** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**page** | **float** |  | [optional] 
**pages** | **float** |  | [optional] 
**per_page** | **float** |  | [optional] 
**privacy** | **float** |  | [optional] 
**topics** | [**List[Topic]**](Topic.md) |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_group_discussions_by_id200_response import GetGroupDiscussionsByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGroupDiscussionsByID200Response from a JSON string
get_group_discussions_by_id200_response_instance = GetGroupDiscussionsByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetGroupDiscussionsByID200Response.to_json())

# convert the object into a dict
get_group_discussions_by_id200_response_dict = get_group_discussions_by_id200_response_instance.to_dict()
# create an instance of GetGroupDiscussionsByID200Response from a dict
get_group_discussions_by_id200_response_from_dict = GetGroupDiscussionsByID200Response.from_dict(get_group_discussions_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


