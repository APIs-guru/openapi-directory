# JqlQueryField

A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_name** | **str** | The encoded name of the field, which can be used directly in a JQL query. | [optional] 
**name** | **str** | The name of the field. | 
**var_property** | [**List[JqlQueryFieldEntityProperty]**](JqlQueryFieldEntityProperty.md) | When the field refers to a value in an entity property, details of the entity property value. | [optional] 

## Example

```python
from openapi_client.models.jql_query_field import JqlQueryField

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryField from a JSON string
jql_query_field_instance = JqlQueryField.from_json(json)
# print the JSON string representation of the object
print(JqlQueryField.to_json())

# convert the object into a dict
jql_query_field_dict = jql_query_field_instance.to_dict()
# create an instance of JqlQueryField from a dict
jql_query_field_from_dict = JqlQueryField.from_dict(jql_query_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


