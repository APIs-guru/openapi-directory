# HybridConnectionKey

Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | HybridConnectionKey resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hybrid_connection_key import HybridConnectionKey

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionKey from a JSON string
hybrid_connection_key_instance = HybridConnectionKey.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionKey.to_json())

# convert the object into a dict
hybrid_connection_key_dict = hybrid_connection_key_instance.to_dict()
# create an instance of HybridConnectionKey from a dict
hybrid_connection_key_from_dict = HybridConnectionKey.from_dict(hybrid_connection_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


