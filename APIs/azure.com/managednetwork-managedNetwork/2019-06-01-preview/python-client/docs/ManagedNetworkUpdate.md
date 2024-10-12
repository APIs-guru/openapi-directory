# ManagedNetworkUpdate

Update Tags of Managed Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.managed_network_update import ManagedNetworkUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkUpdate from a JSON string
managed_network_update_instance = ManagedNetworkUpdate.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkUpdate.to_json())

# convert the object into a dict
managed_network_update_dict = managed_network_update_instance.to_dict()
# create an instance of ManagedNetworkUpdate from a dict
managed_network_update_from_dict = ManagedNetworkUpdate.from_dict(managed_network_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


