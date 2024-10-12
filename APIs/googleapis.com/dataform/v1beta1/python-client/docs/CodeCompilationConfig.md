# CodeCompilationConfig

Configures various aspects of Dataform code compilation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assertion_schema** | **str** | Optional. The default schema (BigQuery dataset ID) for assertions. | [optional] 
**database_suffix** | **str** | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. | [optional] 
**default_database** | **str** | Optional. The default database (Google Cloud project ID). | [optional] 
**default_location** | **str** | Optional. The default BigQuery location to use. Defaults to \&quot;US\&quot;. See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations. | [optional] 
**default_schema** | **str** | Optional. The default schema (BigQuery dataset ID). | [optional] 
**schema_suffix** | **str** | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. | [optional] 
**table_prefix** | **str** | Optional. The prefix that should be prepended to all table names. | [optional] 
**vars** | **Dict[str, str]** | Optional. User-defined variables that are made available to project code during compilation. | [optional] 

## Example

```python
from openapi_client.models.code_compilation_config import CodeCompilationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CodeCompilationConfig from a JSON string
code_compilation_config_instance = CodeCompilationConfig.from_json(json)
# print the JSON string representation of the object
print(CodeCompilationConfig.to_json())

# convert the object into a dict
code_compilation_config_dict = code_compilation_config_instance.to_dict()
# create an instance of CodeCompilationConfig from a dict
code_compilation_config_from_dict = CodeCompilationConfig.from_dict(code_compilation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


