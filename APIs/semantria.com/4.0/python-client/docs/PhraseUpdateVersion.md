# PhraseUpdateVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique sentiment-bearing phrase identifier | 
**name** | **str** | Sentiment-bearing phrase name | 
**weight** | **float** | Sentiment-bearing phrase weight | 

## Example

```python
from openapi_client.models.phrase_update_version import PhraseUpdateVersion

# TODO update the JSON string below
json = "{}"
# create an instance of PhraseUpdateVersion from a JSON string
phrase_update_version_instance = PhraseUpdateVersion.from_json(json)
# print the JSON string representation of the object
print(PhraseUpdateVersion.to_json())

# convert the object into a dict
phrase_update_version_dict = phrase_update_version_instance.to_dict()
# create an instance of PhraseUpdateVersion from a dict
phrase_update_version_from_dict = PhraseUpdateVersion.from_dict(phrase_update_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


