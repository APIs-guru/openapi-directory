# NetworkFeatures

This is an object used to store a full view of network features (presently VNET integration and Hybrid Connections)              for a web app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.network_features import NetworkFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkFeatures from a JSON string
network_features_instance = NetworkFeatures.from_json(json)
# print the JSON string representation of the object
print(NetworkFeatures.to_json())

# convert the object into a dict
network_features_dict = network_features_instance.to_dict()
# create an instance of NetworkFeatures from a dict
network_features_from_dict = NetworkFeatures.from_dict(network_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


