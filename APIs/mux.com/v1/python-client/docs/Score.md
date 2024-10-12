# Score


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Metric]**](Metric.md) |  | [optional] 
**metric** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **float** |  | [optional] 
**view_count** | **int** |  | [optional] 
**watch_time** | **int** |  | [optional] 

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


