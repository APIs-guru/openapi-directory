# DdlStatementActionInfo

Action information extracted from a DDL statement. This proto is used to display the brief info of the DDL statement for the operation UpdateDatabaseDdl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action for the DDL statement, e.g. CREATE, ALTER, DROP, GRANT, etc. This field is a non-empty string. | [optional] 
**entity_names** | **List[str]** | The entity name(s) being operated on the DDL statement. E.g. 1. For statement \&quot;CREATE TABLE t1(...)\&quot;, &#x60;entity_names&#x60; &#x3D; [\&quot;t1\&quot;]. 2. For statement \&quot;GRANT ROLE r1, r2 ...\&quot;, &#x60;entity_names&#x60; &#x3D; [\&quot;r1\&quot;, \&quot;r2\&quot;]. 3. For statement \&quot;ANALYZE\&quot;, &#x60;entity_names&#x60; &#x3D; []. | [optional] 
**entity_type** | **str** | The entity type for the DDL statement, e.g. TABLE, INDEX, VIEW, etc. This field can be empty string for some DDL statement, e.g. for statement \&quot;ANALYZE\&quot;, &#x60;entity_type&#x60; &#x3D; \&quot;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.ddl_statement_action_info import DdlStatementActionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DdlStatementActionInfo from a JSON string
ddl_statement_action_info_instance = DdlStatementActionInfo.from_json(json)
# print the JSON string representation of the object
print(DdlStatementActionInfo.to_json())

# convert the object into a dict
ddl_statement_action_info_dict = ddl_statement_action_info_instance.to_dict()
# create an instance of DdlStatementActionInfo from a dict
ddl_statement_action_info_from_dict = DdlStatementActionInfo.from_dict(ddl_statement_action_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


