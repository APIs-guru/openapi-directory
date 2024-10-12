# NetworkAccessControlEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**remote_subnet** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.network_access_control_entry import NetworkAccessControlEntry

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAccessControlEntry from a JSON string
network_access_control_entry_instance = NetworkAccessControlEntry.from_json(json)
# print the JSON string representation of the object
print(NetworkAccessControlEntry.to_json())

# convert the object into a dict
network_access_control_entry_dict = network_access_control_entry_instance.to_dict()
# create an instance of NetworkAccessControlEntry from a dict
network_access_control_entry_from_dict = NetworkAccessControlEntry.from_dict(network_access_control_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


