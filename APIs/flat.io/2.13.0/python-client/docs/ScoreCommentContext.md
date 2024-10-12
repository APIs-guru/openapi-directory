# ScoreCommentContext

The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measure_uuids** | **List[str]** | The list of measure UUIds | 
**part_uuid** | **str** | The unique identifier (UUID) of the score part | 
**staff_idx** | **float** | (Deprecated, use &#x60;staffUuid&#x60;) The identififer of the staff | [optional] 
**staff_uuid** | **str** | The unique identififer (UUID) of the staff | [optional] 
**start_dpq** | **float** |  | 
**start_time_pos** | **float** |  | 
**stop_dpq** | **float** |  | 
**stop_time_pos** | **float** |  | 

## Example

```python
from openapi_client.models.score_comment_context import ScoreCommentContext

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreCommentContext from a JSON string
score_comment_context_instance = ScoreCommentContext.from_json(json)
# print the JSON string representation of the object
print(ScoreCommentContext.to_json())

# convert the object into a dict
score_comment_context_dict = score_comment_context_instance.to_dict()
# create an instance of ScoreCommentContext from a dict
score_comment_context_from_dict = ScoreCommentContext.from_dict(score_comment_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


