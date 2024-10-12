# ViewDefinition

Describes the definition of a logical view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privacy_policy** | [**PrivacyPolicy**](PrivacyPolicy.md) |  | [optional] 
**query** | **str** | Required. A query that BigQuery executes when the view is referenced. | [optional] 
**use_explicit_column_names** | **bool** | True if the column names are explicitly specified. For example by using the &#39;CREATE VIEW v(c1, c2) AS ...&#39; syntax. Can only be set for GoogleSQL views. | [optional] 
**use_legacy_sql** | **bool** | Specifies whether to use BigQuery&#39;s legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery&#39;s GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value. A wrapper is used here because the default value is True. | [optional] 
**user_defined_function_resources** | [**List[UserDefinedFunctionResource]**](UserDefinedFunctionResource.md) | Describes user-defined function resources used in the query. | [optional] 

## Example

```python
from openapi_client.models.view_definition import ViewDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ViewDefinition from a JSON string
view_definition_instance = ViewDefinition.from_json(json)
# print the JSON string representation of the object
print(ViewDefinition.to_json())

# convert the object into a dict
view_definition_dict = view_definition_instance.to_dict()
# create an instance of ViewDefinition from a dict
view_definition_from_dict = ViewDefinition.from_dict(view_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


