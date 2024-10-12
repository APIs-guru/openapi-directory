# QueryTestablePermissionsResponse

The response containing permissions which can be tested on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | To retrieve the next page of results, set &#x60;QueryTestableRolesRequest.page_token&#x60; to this value. | [optional] 
**permissions** | [**List[Permission]**](Permission.md) | The Permissions testable on the requested resource. | [optional] 

## Example

```python
from openapi_client.models.query_testable_permissions_response import QueryTestablePermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTestablePermissionsResponse from a JSON string
query_testable_permissions_response_instance = QueryTestablePermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryTestablePermissionsResponse.to_json())

# convert the object into a dict
query_testable_permissions_response_dict = query_testable_permissions_response_instance.to_dict()
# create an instance of QueryTestablePermissionsResponse from a dict
query_testable_permissions_response_from_dict = QueryTestablePermissionsResponse.from_dict(query_testable_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


