# Mark


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**feedback** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**mark** | **str** |  | [optional] 
**mark_feedback** | [**List[MarkFeedback]**](MarkFeedback.md) |  | [optional] 
**marked_by** | **str** |  | [optional] 
**marker_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mark import Mark

# TODO update the JSON string below
json = "{}"
# create an instance of Mark from a JSON string
mark_instance = Mark.from_json(json)
# print the JSON string representation of the object
print(Mark.to_json())

# convert the object into a dict
mark_dict = mark_instance.to_dict()
# create an instance of Mark from a dict
mark_from_dict = Mark.from_dict(mark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


