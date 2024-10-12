# LogicalNetworkModel

Properties of a logical network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, str]** | Metadata related to the logical network. | [optional] 
**network_virtualization_enabled** | **bool** | Flag to indicate that the network virtualization is enabled on the logical network. | [optional] 
**subnets** | **List[str]** | List of subnets belonging to the logical network. | [optional] 

## Example

```python
from openapi_client.models.logical_network_model import LogicalNetworkModel

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalNetworkModel from a JSON string
logical_network_model_instance = LogicalNetworkModel.from_json(json)
# print the JSON string representation of the object
print(LogicalNetworkModel.to_json())

# convert the object into a dict
logical_network_model_dict = logical_network_model_instance.to_dict()
# create an instance of LogicalNetworkModel from a dict
logical_network_model_from_dict = LogicalNetworkModel.from_dict(logical_network_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


