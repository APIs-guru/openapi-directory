# ComputeNodesInformation

Compute nodes information related to a Machine Learning compute. Might differ for every type of compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_type** | [**ComputeType**](ComputeType.md) |  | 
**next_link** | **str** | The continuation token. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_nodes_information import ComputeNodesInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodesInformation from a JSON string
compute_nodes_information_instance = ComputeNodesInformation.from_json(json)
# print the JSON string representation of the object
print(ComputeNodesInformation.to_json())

# convert the object into a dict
compute_nodes_information_dict = compute_nodes_information_instance.to_dict()
# create an instance of ComputeNodesInformation from a dict
compute_nodes_information_from_dict = ComputeNodesInformation.from_dict(compute_nodes_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


