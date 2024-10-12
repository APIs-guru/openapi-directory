# BadgesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**award_count** | **int** |  | [optional] 
**badge_id** | **int** |  | [optional] 
**badge_type** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**rank** | **str** |  | [optional] 
**user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 

## Example

```python
from openapi_client.models.badges_inner import BadgesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BadgesInner from a JSON string
badges_inner_instance = BadgesInner.from_json(json)
# print the JSON string representation of the object
print(BadgesInner.to_json())

# convert the object into a dict
badges_inner_dict = badges_inner_instance.to_dict()
# create an instance of BadgesInner from a dict
badges_inner_from_dict = BadgesInner.from_dict(badges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


