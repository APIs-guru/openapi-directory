# PeeringRegisteredPrefix

The customer's prefix that is registered by the peering service provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PeeringRegisteredPrefixProperties**](PeeringRegisteredPrefixProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_registered_prefix import PeeringRegisteredPrefix

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRegisteredPrefix from a JSON string
peering_registered_prefix_instance = PeeringRegisteredPrefix.from_json(json)
# print the JSON string representation of the object
print(PeeringRegisteredPrefix.to_json())

# convert the object into a dict
peering_registered_prefix_dict = peering_registered_prefix_instance.to_dict()
# create an instance of PeeringRegisteredPrefix from a dict
peering_registered_prefix_from_dict = PeeringRegisteredPrefix.from_dict(peering_registered_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


