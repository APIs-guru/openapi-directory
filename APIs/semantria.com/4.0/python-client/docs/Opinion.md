# Opinion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quotation** | **str** | The text of the expressed opinion | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 
**sentiment_score** | **float** | The sentiment score associated with the opinion | 
**speaker** | **float** | An entity title identifying the author of the opinion | 
**topic** | **str** | An entity title identifying the subject of the opinion, if applicable | 
**type** | **str** | Type of opinion according to extracted entity | 

## Example

```python
from openapi_client.models.opinion import Opinion

# TODO update the JSON string below
json = "{}"
# create an instance of Opinion from a JSON string
opinion_instance = Opinion.from_json(json)
# print the JSON string representation of the object
print(Opinion.to_json())

# convert the object into a dict
opinion_dict = opinion_instance.to_dict()
# create an instance of Opinion from a dict
opinion_from_dict = Opinion.from_dict(opinion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


