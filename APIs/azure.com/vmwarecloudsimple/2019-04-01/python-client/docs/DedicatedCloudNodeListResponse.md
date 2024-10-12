# DedicatedCloudNodeListResponse

List of dedicated nodes response model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of DedicatedCloudNode | [optional] 
**value** | [**List[DedicatedCloudNode]**](DedicatedCloudNode.md) | Results of the DedicatedCloudNode list | [optional] 

## Example

```python
from openapi_client.models.dedicated_cloud_node_list_response import DedicatedCloudNodeListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCloudNodeListResponse from a JSON string
dedicated_cloud_node_list_response_instance = DedicatedCloudNodeListResponse.from_json(json)
# print the JSON string representation of the object
print(DedicatedCloudNodeListResponse.to_json())

# convert the object into a dict
dedicated_cloud_node_list_response_dict = dedicated_cloud_node_list_response_instance.to_dict()
# create an instance of DedicatedCloudNodeListResponse from a dict
dedicated_cloud_node_list_response_from_dict = DedicatedCloudNodeListResponse.from_dict(dedicated_cloud_node_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


