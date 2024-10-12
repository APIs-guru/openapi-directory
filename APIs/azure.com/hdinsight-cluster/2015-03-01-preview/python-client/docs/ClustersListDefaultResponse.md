# ClustersListDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.clusters_list_default_response import ClustersListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClustersListDefaultResponse from a JSON string
clusters_list_default_response_instance = ClustersListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ClustersListDefaultResponse.to_json())

# convert the object into a dict
clusters_list_default_response_dict = clusters_list_default_response_instance.to_dict()
# create an instance of ClustersListDefaultResponse from a dict
clusters_list_default_response_from_dict = ClustersListDefaultResponse.from_dict(clusters_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


