# HybridConnectionLimits

Hybrid Connection limits contract. This is used to return the plan limits of Hybrid Connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | HybridConnectionLimits resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hybrid_connection_limits import HybridConnectionLimits

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionLimits from a JSON string
hybrid_connection_limits_instance = HybridConnectionLimits.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionLimits.to_json())

# convert the object into a dict
hybrid_connection_limits_dict = hybrid_connection_limits_instance.to_dict()
# create an instance of HybridConnectionLimits from a dict
hybrid_connection_limits_from_dict = HybridConnectionLimits.from_dict(hybrid_connection_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


