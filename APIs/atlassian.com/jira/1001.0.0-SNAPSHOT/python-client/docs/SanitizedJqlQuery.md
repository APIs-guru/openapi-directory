# SanitizedJqlQuery

Details of the sanitized JQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user for whom sanitization was performed. | [optional] 
**errors** | [**ErrorCollection**](ErrorCollection.md) | The list of errors. | [optional] 
**initial_query** | **str** | The initial query. | [optional] 
**sanitized_query** | **str** | The sanitized query, if there were no errors. | [optional] 

## Example

```python
from openapi_client.models.sanitized_jql_query import SanitizedJqlQuery

# TODO update the JSON string below
json = "{}"
# create an instance of SanitizedJqlQuery from a JSON string
sanitized_jql_query_instance = SanitizedJqlQuery.from_json(json)
# print the JSON string representation of the object
print(SanitizedJqlQuery.to_json())

# convert the object into a dict
sanitized_jql_query_dict = sanitized_jql_query_instance.to_dict()
# create an instance of SanitizedJqlQuery from a dict
sanitized_jql_query_from_dict = SanitizedJqlQuery.from_dict(sanitized_jql_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


