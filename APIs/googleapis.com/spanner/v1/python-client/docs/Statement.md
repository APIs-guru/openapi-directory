# Statement

A single DML statement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**param_types** | [**Dict[str, Type]**](Type.md) | It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type &#x60;BYTES&#x60; and values of type &#x60;STRING&#x60; both appear in params as JSON strings. In these cases, &#x60;param_types&#x60; can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types. | [optional] 
**params** | **Dict[str, object]** | Parameter names and values that bind to placeholders in the DML string. A parameter placeholder consists of the &#x60;@&#x60; character followed by the parameter name (for example, &#x60;@firstName&#x60;). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: &#x60;\&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100\&quot;&#x60; It is an error to execute a SQL statement with unbound parameters. | [optional] 
**sql** | **str** | Required. The DML string. | [optional] 

## Example

```python
from openapi_client.models.statement import Statement

# TODO update the JSON string below
json = "{}"
# create an instance of Statement from a JSON string
statement_instance = Statement.from_json(json)
# print the JSON string representation of the object
print(Statement.to_json())

# convert the object into a dict
statement_dict = statement_instance.to_dict()
# create an instance of Statement from a dict
statement_from_dict = Statement.from_dict(statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


