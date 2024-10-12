# VirtualNIC

Configuration of gVNIC feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether gVNIC features are enabled in the node pool. | [optional] 

## Example

```python
from openapi_client.models.virtual_nic import VirtualNIC

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNIC from a JSON string
virtual_nic_instance = VirtualNIC.from_json(json)
# print the JSON string representation of the object
print(VirtualNIC.to_json())

# convert the object into a dict
virtual_nic_dict = virtual_nic_instance.to_dict()
# create an instance of VirtualNIC from a dict
virtual_nic_from_dict = VirtualNIC.from_dict(virtual_nic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


