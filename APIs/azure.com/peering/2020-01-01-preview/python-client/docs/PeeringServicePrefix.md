# PeeringServicePrefix

The peering service prefix class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PeeringServicePrefixProperties**](PeeringServicePrefixProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_prefix import PeeringServicePrefix

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServicePrefix from a JSON string
peering_service_prefix_instance = PeeringServicePrefix.from_json(json)
# print the JSON string representation of the object
print(PeeringServicePrefix.to_json())

# convert the object into a dict
peering_service_prefix_dict = peering_service_prefix_instance.to_dict()
# create an instance of PeeringServicePrefix from a dict
peering_service_prefix_from_dict = PeeringServicePrefix.from_dict(peering_service_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


