# NetworkAdapterPosition

The network adapter position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_group** | **str** | The network group. | [optional] [readonly] 
**port** | **int** | The port. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_adapter_position import NetworkAdapterPosition

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAdapterPosition from a JSON string
network_adapter_position_instance = NetworkAdapterPosition.from_json(json)
# print the JSON string representation of the object
print(NetworkAdapterPosition.to_json())

# convert the object into a dict
network_adapter_position_dict = network_adapter_position_instance.to_dict()
# create an instance of NetworkAdapterPosition from a dict
network_adapter_position_from_dict = NetworkAdapterPosition.from_dict(network_adapter_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


