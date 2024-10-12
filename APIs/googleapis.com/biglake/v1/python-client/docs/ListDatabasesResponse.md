# ListDatabasesResponse

Response message for the ListDatabases method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databases** | [**List[Database]**](Database.md) | The databases from the specified catalog. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_databases_response import ListDatabasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDatabasesResponse from a JSON string
list_databases_response_instance = ListDatabasesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDatabasesResponse.to_json())

# convert the object into a dict
list_databases_response_dict = list_databases_response_instance.to_dict()
# create an instance of ListDatabasesResponse from a dict
list_databases_response_from_dict = ListDatabasesResponse.from_dict(list_databases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


