# Sentiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**end** | **int** |  | [optional] 
**negation_term** | **str** |  | [optional] 
**parent_category** | **str** |  | [optional] 
**positive** | **bool** |  | [optional] 
**scale** | **float** |  | [optional] 
**start** | **int** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sentiment import Sentiment

# TODO update the JSON string below
json = "{}"
# create an instance of Sentiment from a JSON string
sentiment_instance = Sentiment.from_json(json)
# print the JSON string representation of the object
print(Sentiment.to_json())

# convert the object into a dict
sentiment_dict = sentiment_instance.to_dict()
# create an instance of Sentiment from a dict
sentiment_from_dict = Sentiment.from_dict(sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


