# OperationsDiscoveryCollection

Collection of ClientDiscovery details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[OperationsDiscovery]**](OperationsDiscovery.md) | The ClientDiscovery details. | [optional] 

## Example

```python
from openapi_client.models.operations_discovery_collection import OperationsDiscoveryCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsDiscoveryCollection from a JSON string
operations_discovery_collection_instance = OperationsDiscoveryCollection.from_json(json)
# print the JSON string representation of the object
print(OperationsDiscoveryCollection.to_json())

# convert the object into a dict
operations_discovery_collection_dict = operations_discovery_collection_instance.to_dict()
# create an instance of OperationsDiscoveryCollection from a dict
operations_discovery_collection_from_dict = OperationsDiscoveryCollection.from_dict(operations_discovery_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


