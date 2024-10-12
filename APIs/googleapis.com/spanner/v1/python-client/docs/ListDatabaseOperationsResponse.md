# ListDatabaseOperationsResponse

The response for ListDatabaseOperations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListDatabaseOperations call to fetch more of the matching metadata. | [optional] 
**operations** | [**List[Operation]**](Operation.md) | The list of matching database long-running operations. Each operation&#39;s name will be prefixed by the database&#39;s name. The operation&#39;s metadata field type &#x60;metadata.type_url&#x60; describes the type of the metadata. | [optional] 

## Example

```python
from openapi_client.models.list_database_operations_response import ListDatabaseOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDatabaseOperationsResponse from a JSON string
list_database_operations_response_instance = ListDatabaseOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDatabaseOperationsResponse.to_json())

# convert the object into a dict
list_database_operations_response_dict = list_database_operations_response_instance.to_dict()
# create an instance of ListDatabaseOperationsResponse from a dict
list_database_operations_response_from_dict = ListDatabaseOperationsResponse.from_dict(list_database_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


