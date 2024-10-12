# Topic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hitcount** | **int** | The number of documents within the collection that match the topic | 
**id** | **str** | Unique topic identifier | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 
**sentiment_score** | **float** | The sentiment score for documents content associated with the topic | 
**title** | **str** | The topic title, which is its label in the text | 
**type** | **str** | Type of the topic; can be either \&quot;concept\&quot; or \&quot;query\&quot; | 

## Example

```python
from openapi_client.models.topic import Topic

# TODO update the JSON string below
json = "{}"
# create an instance of Topic from a JSON string
topic_instance = Topic.from_json(json)
# print the JSON string representation of the object
print(Topic.to_json())

# convert the object into a dict
topic_dict = topic_instance.to_dict()
# create an instance of Topic from a dict
topic_from_dict = Topic.from_dict(topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


