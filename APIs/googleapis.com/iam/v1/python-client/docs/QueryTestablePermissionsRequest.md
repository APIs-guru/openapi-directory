# QueryTestablePermissionsRequest

A request to get permissions which can be tested on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_resource_name** | **str** | Required. The full resource name to query from the list of testable permissions. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id &#x60;my-project&#x60; will be named &#x60;//cloudresourcemanager.googleapis.com/projects/my-project&#x60;. | [optional] 
**page_size** | **int** | Optional limit on the number of permissions to include in the response. The default is 100, and the maximum is 1,000. | [optional] 
**page_token** | **str** | Optional pagination token returned in an earlier QueryTestablePermissionsRequest. | [optional] 

## Example

```python
from openapi_client.models.query_testable_permissions_request import QueryTestablePermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTestablePermissionsRequest from a JSON string
query_testable_permissions_request_instance = QueryTestablePermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryTestablePermissionsRequest.to_json())

# convert the object into a dict
query_testable_permissions_request_dict = query_testable_permissions_request_instance.to_dict()
# create an instance of QueryTestablePermissionsRequest from a dict
query_testable_permissions_request_from_dict = QueryTestablePermissionsRequest.from_dict(query_testable_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


