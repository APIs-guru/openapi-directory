# PhraseResponseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique sentiment-bearing phrase identifier | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Sentiment-bearing phrase name | 
**weight** | **float** | Sentiment-bearing phrase weight | 

## Example

```python
from openapi_client.models.phrase_response_version import PhraseResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of PhraseResponseVersion from a JSON string
phrase_response_version_instance = PhraseResponseVersion.from_json(json)
# print the JSON string representation of the object
print(PhraseResponseVersion.to_json())

# convert the object into a dict
phrase_response_version_dict = phrase_response_version_instance.to_dict()
# create an instance of PhraseResponseVersion from a dict
phrase_response_version_from_dict = PhraseResponseVersion.from_dict(phrase_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


