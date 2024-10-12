# QueryInterpretationConfig

Default options to interpret user query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force_disable_supplemental_results** | **bool** | Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results. | [optional] 
**force_verbatim_mode** | **bool** | Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode. | [optional] 

## Example

```python
from openapi_client.models.query_interpretation_config import QueryInterpretationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInterpretationConfig from a JSON string
query_interpretation_config_instance = QueryInterpretationConfig.from_json(json)
# print the JSON string representation of the object
print(QueryInterpretationConfig.to_json())

# convert the object into a dict
query_interpretation_config_dict = query_interpretation_config_instance.to_dict()
# create an instance of QueryInterpretationConfig from a dict
query_interpretation_config_from_dict = QueryInterpretationConfig.from_dict(query_interpretation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


