# InboundUpdateRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**pattern** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_update_route import InboundUpdateRoute

# TODO update the JSON string below
json = "{}"
# create an instance of InboundUpdateRoute from a JSON string
inbound_update_route_instance = InboundUpdateRoute.from_json(json)
# print the JSON string representation of the object
print(InboundUpdateRoute.to_json())

# convert the object into a dict
inbound_update_route_dict = inbound_update_route_instance.to_dict()
# create an instance of InboundUpdateRoute from a dict
inbound_update_route_from_dict = InboundUpdateRoute.from_dict(inbound_update_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


