# AmlComputeNodeInformation

Compute node information related to a AmlCompute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | Public IP address of the compute node. | [optional] [readonly] 
**node_id** | **str** | ID of the compute node. | [optional] [readonly] 
**port** | **float** | SSH port number of the node. | [optional] [readonly] 

## Example

```python
from openapi_client.models.aml_compute_node_information import AmlComputeNodeInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AmlComputeNodeInformation from a JSON string
aml_compute_node_information_instance = AmlComputeNodeInformation.from_json(json)
# print the JSON string representation of the object
print(AmlComputeNodeInformation.to_json())

# convert the object into a dict
aml_compute_node_information_dict = aml_compute_node_information_instance.to_dict()
# create an instance of AmlComputeNodeInformation from a dict
aml_compute_node_information_from_dict = AmlComputeNodeInformation.from_dict(aml_compute_node_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


