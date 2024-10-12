# PhraseInsertVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Sentiment-bearing phrase name | 
**weight** | **float** | Sentiment-bearing phrase weight | 

## Example

```python
from openapi_client.models.phrase_insert_version import PhraseInsertVersion

# TODO update the JSON string below
json = "{}"
# create an instance of PhraseInsertVersion from a JSON string
phrase_insert_version_instance = PhraseInsertVersion.from_json(json)
# print the JSON string representation of the object
print(PhraseInsertVersion.to_json())

# convert the object into a dict
phrase_insert_version_dict = phrase_insert_version_instance.to_dict()
# create an instance of PhraseInsertVersion from a dict
phrase_insert_version_from_dict = PhraseInsertVersion.from_dict(phrase_insert_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


