# ListSQLIntegrationsResponse

ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**sql_integrations** | [**List[SQLIntegration]**](SQLIntegration.md) | A list of SQLIntegrations of a domain. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_sql_integrations_response import ListSQLIntegrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSQLIntegrationsResponse from a JSON string
list_sql_integrations_response_instance = ListSQLIntegrationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSQLIntegrationsResponse.to_json())

# convert the object into a dict
list_sql_integrations_response_dict = list_sql_integrations_response_instance.to_dict()
# create an instance of ListSQLIntegrationsResponse from a dict
list_sql_integrations_response_from_dict = ListSQLIntegrationsResponse.from_dict(list_sql_integrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


