# Score

Analysis scores are described by a value and a ScoreType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the above value. | [optional] 
**value** | **float** | Score value. Semantics described by type below. | [optional] 

## Example

```python
from openapi_client.models.score import Score

# TODO update the JSON string below
json = "{}"
# create an instance of Score from a JSON string
score_instance = Score.from_json(json)
# print the JSON string representation of the object
print(Score.to_json())

# convert the object into a dict
score_dict = score_instance.to_dict()
# create an instance of Score from a dict
score_from_dict = Score.from_dict(score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


