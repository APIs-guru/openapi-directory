# AmlComputeNodesInformation

Compute node information related to a AmlCompute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[AmlComputeNodeInformation]**](AmlComputeNodeInformation.md) | The collection of returned AmlCompute nodes details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.aml_compute_nodes_information import AmlComputeNodesInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AmlComputeNodesInformation from a JSON string
aml_compute_nodes_information_instance = AmlComputeNodesInformation.from_json(json)
# print the JSON string representation of the object
print(AmlComputeNodesInformation.to_json())

# convert the object into a dict
aml_compute_nodes_information_dict = aml_compute_nodes_information_instance.to_dict()
# create an instance of AmlComputeNodesInformation from a dict
aml_compute_nodes_information_from_dict = AmlComputeNodesInformation.from_dict(aml_compute_nodes_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


