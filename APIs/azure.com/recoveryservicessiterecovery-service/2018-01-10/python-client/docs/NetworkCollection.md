# NetworkCollection

List of networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[Network]**](Network.md) | The Networks list details. | [optional] 

## Example

```python
from openapi_client.models.network_collection import NetworkCollection

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkCollection from a JSON string
network_collection_instance = NetworkCollection.from_json(json)
# print the JSON string representation of the object
print(NetworkCollection.to_json())

# convert the object into a dict
network_collection_dict = network_collection_instance.to_dict()
# create an instance of NetworkCollection from a dict
network_collection_from_dict = NetworkCollection.from_dict(network_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


