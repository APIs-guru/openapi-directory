# JqlQueryToSanitize

The JQL query to sanitize for the account ID. If the account ID is null, sanitizing is performed for an anonymous user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
**query** | **str** | The query to sanitize. | 

## Example

```python
from openapi_client.models.jql_query_to_sanitize import JqlQueryToSanitize

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryToSanitize from a JSON string
jql_query_to_sanitize_instance = JqlQueryToSanitize.from_json(json)
# print the JSON string representation of the object
print(JqlQueryToSanitize.to_json())

# convert the object into a dict
jql_query_to_sanitize_dict = jql_query_to_sanitize_instance.to_dict()
# create an instance of JqlQueryToSanitize from a dict
jql_query_to_sanitize_from_dict = JqlQueryToSanitize.from_dict(jql_query_to_sanitize_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


