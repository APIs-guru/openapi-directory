# SourceScoringConfig

Set the scoring configuration. This allows modifying the ranking of results for a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_importance** | **str** | Importance of the source. | [optional] 

## Example

```python
from openapi_client.models.source_scoring_config import SourceScoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SourceScoringConfig from a JSON string
source_scoring_config_instance = SourceScoringConfig.from_json(json)
# print the JSON string representation of the object
print(SourceScoringConfig.to_json())

# convert the object into a dict
source_scoring_config_dict = source_scoring_config_instance.to_dict()
# create an instance of SourceScoringConfig from a dict
source_scoring_config_from_dict = SourceScoringConfig.from_dict(source_scoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


