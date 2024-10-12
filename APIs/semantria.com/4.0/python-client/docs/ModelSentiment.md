# ModelSentiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mixed_score** | **float** | Mixed sentiment score associated with the document | 
**model_name** | **str** | Name of the sentiment model used for scoring | 
**negative_score** | **float** | Negative (probable negative score) sentiment score associated with the document | 
**neutral_score** | **float** | Neutral (probable neutral score) sentiment score associated with the document | 
**positive_score** | **float** | Positive (probable positive score) sentiment score associated with the document | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score that matches the best on the document. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 

## Example

```python
from openapi_client.models.model_sentiment import ModelSentiment

# TODO update the JSON string below
json = "{}"
# create an instance of ModelSentiment from a JSON string
model_sentiment_instance = ModelSentiment.from_json(json)
# print the JSON string representation of the object
print(ModelSentiment.to_json())

# convert the object into a dict
model_sentiment_dict = model_sentiment_instance.to_dict()
# create an instance of ModelSentiment from a dict
model_sentiment_from_dict = ModelSentiment.from_dict(model_sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


