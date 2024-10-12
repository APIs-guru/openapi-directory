# PortFragment

Properties of a network port.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_port** | **int** | Backend port of the target virtual machine. | [optional] 
**transport_protocol** | **str** | Protocol type of the port. | [optional] 

## Example

```python
from openapi_client.models.port_fragment import PortFragment

# TODO update the JSON string below
json = "{}"
# create an instance of PortFragment from a JSON string
port_fragment_instance = PortFragment.from_json(json)
# print the JSON string representation of the object
print(PortFragment.to_json())

# convert the object into a dict
port_fragment_dict = port_fragment_instance.to_dict()
# create an instance of PortFragment from a dict
port_fragment_from_dict = PortFragment.from_dict(port_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


