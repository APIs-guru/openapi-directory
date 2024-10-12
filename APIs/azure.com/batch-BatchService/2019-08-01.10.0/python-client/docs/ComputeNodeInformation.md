# ComputeNodeInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_id** | **str** |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_url** | **str** |  | [optional] 
**pool_id** | **str** |  | [optional] 
**task_root_directory** | **str** |  | [optional] 
**task_root_directory_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.compute_node_information import ComputeNodeInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodeInformation from a JSON string
compute_node_information_instance = ComputeNodeInformation.from_json(json)
# print the JSON string representation of the object
print(ComputeNodeInformation.to_json())

# convert the object into a dict
compute_node_information_dict = compute_node_information_instance.to_dict()
# create an instance of ComputeNodeInformation from a dict
compute_node_information_from_dict = ComputeNodeInformation.from_dict(compute_node_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


