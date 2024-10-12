# InfoObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers_per_minute** | **float** |  | [optional] 
**api_revision** | **str** |  | [optional] 
**badges_per_minute** | **float** |  | [optional] 
**new_active_users** | **int** |  | [optional] 
**questions_per_minute** | **float** |  | [optional] 
**site** | [**InboxItemsInnerSite**](InboxItemsInnerSite.md) |  | [optional] 
**total_accepted** | **int** |  | [optional] 
**total_answers** | **int** |  | [optional] 
**total_badges** | **int** |  | [optional] 
**total_comments** | **int** |  | [optional] 
**total_questions** | **int** |  | [optional] 
**total_unanswered** | **int** |  | [optional] 
**total_users** | **int** |  | [optional] 
**total_votes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.info_object import InfoObject

# TODO update the JSON string below
json = "{}"
# create an instance of InfoObject from a JSON string
info_object_instance = InfoObject.from_json(json)
# print the JSON string representation of the object
print(InfoObject.to_json())

# convert the object into a dict
info_object_dict = info_object_instance.to_dict()
# create an instance of InfoObject from a dict
info_object_from_dict = InfoObject.from_dict(info_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


