# QueryInterpretationOptions

Options to interpret user query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_nl_interpretation** | **bool** | Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources. | [optional] 
**disable_supplemental_results** | **bool** | Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True. | [optional] 
**enable_verbatim_mode** | **bool** | Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true. | [optional] 

## Example

```python
from openapi_client.models.query_interpretation_options import QueryInterpretationOptions

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInterpretationOptions from a JSON string
query_interpretation_options_instance = QueryInterpretationOptions.from_json(json)
# print the JSON string representation of the object
print(QueryInterpretationOptions.to_json())

# convert the object into a dict
query_interpretation_options_dict = query_interpretation_options_instance.to_dict()
# create an instance of QueryInterpretationOptions from a dict
query_interpretation_options_from_dict = QueryInterpretationOptions.from_dict(query_interpretation_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


