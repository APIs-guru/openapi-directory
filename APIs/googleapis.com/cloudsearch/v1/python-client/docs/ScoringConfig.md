# ScoringConfig

Scoring configurations for a source while processing a Search or Suggest request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_freshness** | **bool** | Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI. | [optional] 
**disable_personalization** | **bool** | Whether to personalize the results. By default, personal signals will be used to boost results. | [optional] 

## Example

```python
from openapi_client.models.scoring_config import ScoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScoringConfig from a JSON string
scoring_config_instance = ScoringConfig.from_json(json)
# print the JSON string representation of the object
print(ScoringConfig.to_json())

# convert the object into a dict
scoring_config_dict = scoring_config_instance.to_dict()
# create an instance of ScoringConfig from a dict
scoring_config_from_dict = ScoringConfig.from_dict(scoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


