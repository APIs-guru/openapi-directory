# ConnectivityCollection

The collection of Connectivity related groups and policies within the Managed Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[ManagedNetworkGroup]**](ManagedNetworkGroup.md) | The collection of connectivity related Managed Network Groups within the Managed Network | [optional] [readonly] 
**peerings** | [**List[ManagedNetworkPeeringPolicy]**](ManagedNetworkPeeringPolicy.md) | The collection of Managed Network Peering Policies within the Managed Network | [optional] [readonly] 

## Example

```python
from openapi_client.models.connectivity_collection import ConnectivityCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityCollection from a JSON string
connectivity_collection_instance = ConnectivityCollection.from_json(json)
# print the JSON string representation of the object
print(ConnectivityCollection.to_json())

# convert the object into a dict
connectivity_collection_dict = connectivity_collection_instance.to_dict()
# create an instance of ConnectivityCollection from a dict
connectivity_collection_from_dict = ConnectivityCollection.from_dict(connectivity_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


