# QueryGrantableRolesRequest

The grantable role query request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_resource_name** | **str** | Required. The full resource name to query from the list of grantable roles. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id &#x60;my-project&#x60; will be named &#x60;//cloudresourcemanager.googleapis.com/projects/my-project&#x60;. | [optional] 
**page_size** | **int** | Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. | [optional] 
**page_token** | **str** | Optional pagination token returned in an earlier QueryGrantableRolesResponse. | [optional] 
**view** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.query_grantable_roles_request import QueryGrantableRolesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryGrantableRolesRequest from a JSON string
query_grantable_roles_request_instance = QueryGrantableRolesRequest.from_json(json)
# print the JSON string representation of the object
print(QueryGrantableRolesRequest.to_json())

# convert the object into a dict
query_grantable_roles_request_dict = query_grantable_roles_request_instance.to_dict()
# create an instance of QueryGrantableRolesRequest from a dict
query_grantable_roles_request_from_dict = QueryGrantableRolesRequest.from_dict(query_grantable_roles_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


