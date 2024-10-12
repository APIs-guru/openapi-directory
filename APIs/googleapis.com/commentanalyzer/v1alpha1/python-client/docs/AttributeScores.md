# AttributeScores

This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**span_scores** | [**List[SpanScore]**](SpanScore.md) | Per-span scores. | [optional] 
**summary_score** | [**Score**](Score.md) |  | [optional] 

## Example

```python
from openapi_client.models.attribute_scores import AttributeScores

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeScores from a JSON string
attribute_scores_instance = AttributeScores.from_json(json)
# print the JSON string representation of the object
print(AttributeScores.to_json())

# convert the object into a dict
attribute_scores_dict = attribute_scores_instance.to_dict()
# create an instance of AttributeScores from a dict
attribute_scores_from_dict = AttributeScores.from_dict(attribute_scores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


