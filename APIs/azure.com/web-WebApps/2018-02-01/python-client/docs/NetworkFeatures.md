# NetworkFeatures

Full view of network features for an app (presently VNET integration and Hybrid Connections).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | NetworkFeatures resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


