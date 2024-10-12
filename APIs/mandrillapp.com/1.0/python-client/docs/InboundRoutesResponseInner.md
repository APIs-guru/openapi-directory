# InboundRoutesResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**pattern** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_routes_response_inner import InboundRoutesResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of InboundRoutesResponseInner from a JSON string
inbound_routes_response_inner_instance = InboundRoutesResponseInner.from_json(json)
# print the JSON string representation of the object
print(InboundRoutesResponseInner.to_json())

# convert the object into a dict
inbound_routes_response_inner_dict = inbound_routes_response_inner_instance.to_dict()
# create an instance of InboundRoutesResponseInner from a dict
inbound_routes_response_inner_from_dict = InboundRoutesResponseInner.from_dict(inbound_routes_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


