# Phrase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intensifying_phrase** | **str** | If the phrase has been intensified, this gives the intensifying phrase | 
**is_intensified** | **bool** | Specifies whether the phrase has been intensified or not | 
**is_negated** | **bool** | Specifies whether the phrase has been negated or not | 
**negating_phrase** | **str** | If the phrase has been negated, this gives the negating phrase | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 
**sentiment_score** | **float** | The sentiment score associated with this phrase | 
**title** | **str** | The text of the sentiment-bearing phrase | 
**type** | **str** | Type of phrase; can be either \&quot;possible\&quot; or \&quot;detected\&quot; value | 

## Example

```python
from openapi_client.models.phrase import Phrase

# TODO update the JSON string below
json = "{}"
# create an instance of Phrase from a JSON string
phrase_instance = Phrase.from_json(json)
# print the JSON string representation of the object
print(Phrase.to_json())

# convert the object into a dict
phrase_dict = phrase_instance.to_dict()
# create an instance of Phrase from a dict
phrase_from_dict = Phrase.from_dict(phrase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


