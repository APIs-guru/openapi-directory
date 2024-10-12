# InboundAddRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**pattern** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_add_route import InboundAddRoute

# TODO update the JSON string below
json = "{}"
# create an instance of InboundAddRoute from a JSON string
inbound_add_route_instance = InboundAddRoute.from_json(json)
# print the JSON string representation of the object
print(InboundAddRoute.to_json())

# convert the object into a dict
inbound_add_route_dict = inbound_add_route_instance.to_dict()
# create an instance of InboundAddRoute from a dict
inbound_add_route_from_dict = InboundAddRoute.from_dict(inbound_add_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


