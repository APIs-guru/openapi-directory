# ApplicationsListByClusterDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.applications_list_by_cluster_default_response import ApplicationsListByClusterDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationsListByClusterDefaultResponse from a JSON string
applications_list_by_cluster_default_response_instance = ApplicationsListByClusterDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ApplicationsListByClusterDefaultResponse.to_json())

# convert the object into a dict
applications_list_by_cluster_default_response_dict = applications_list_by_cluster_default_response_instance.to_dict()
# create an instance of ApplicationsListByClusterDefaultResponse from a dict
applications_list_by_cluster_default_response_from_dict = ApplicationsListByClusterDefaultResponse.from_dict(applications_list_by_cluster_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


