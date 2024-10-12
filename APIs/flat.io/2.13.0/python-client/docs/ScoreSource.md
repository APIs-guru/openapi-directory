# ScoreSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_drive** | **str** | If the score is a file on Google Drive, this field property must contain its identifier. To use this method, the Drive file must be public or the Flat Drive App must have access to the file.  | [optional] 

## Example

```python
from openapi_client.models.score_source import ScoreSource

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreSource from a JSON string
score_source_instance = ScoreSource.from_json(json)
# print the JSON string representation of the object
print(ScoreSource.to_json())

# convert the object into a dict
score_source_dict = score_source_instance.to_dict()
# create an instance of ScoreSource from a dict
score_source_from_dict = ScoreSource.from_dict(score_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


