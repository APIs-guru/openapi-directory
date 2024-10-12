# SourceCrowdingConfig

Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host \"crowd out\" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_results** | **int** | Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. Value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100. | [optional] 
**num_suggestions** | **int** | Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0. | [optional] 

## Example

```python
from openapi_client.models.source_crowding_config import SourceCrowdingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SourceCrowdingConfig from a JSON string
source_crowding_config_instance = SourceCrowdingConfig.from_json(json)
# print the JSON string representation of the object
print(SourceCrowdingConfig.to_json())

# convert the object into a dict
source_crowding_config_dict = source_crowding_config_instance.to_dict()
# create an instance of SourceCrowdingConfig from a dict
source_crowding_config_from_dict = SourceCrowdingConfig.from_dict(source_crowding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


