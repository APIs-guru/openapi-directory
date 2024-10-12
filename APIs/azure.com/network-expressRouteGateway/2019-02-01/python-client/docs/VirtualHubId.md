# VirtualHubId

Virtual Hub identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription. | [optional] 

## Example

```python
from openapi_client.models.virtual_hub_id import VirtualHubId

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHubId from a JSON string
virtual_hub_id_instance = VirtualHubId.from_json(json)
# print the JSON string representation of the object
print(VirtualHubId.to_json())

# convert the object into a dict
virtual_hub_id_dict = virtual_hub_id_instance.to_dict()
# create an instance of VirtualHubId from a dict
virtual_hub_id_from_dict = VirtualHubId.from_dict(virtual_hub_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


