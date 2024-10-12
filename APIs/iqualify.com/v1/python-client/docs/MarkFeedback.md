# MarkFeedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**feedback** | **str** |  | [optional] 
**feedback_by** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**mark** | **str** |  | [optional] 
**marker_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mark_feedback import MarkFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of MarkFeedback from a JSON string
mark_feedback_instance = MarkFeedback.from_json(json)
# print the JSON string representation of the object
print(MarkFeedback.to_json())

# convert the object into a dict
mark_feedback_dict = mark_feedback_instance.to_dict()
# create an instance of MarkFeedback from a dict
mark_feedback_from_dict = MarkFeedback.from_dict(mark_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


