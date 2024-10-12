# PingMethodCodeJsonldGet

The PingMethodCode resource is a set of codes that describes the different methods of sending pings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_name** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.ping_method_code_jsonld_get import PingMethodCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of PingMethodCodeJsonldGet from a JSON string
ping_method_code_jsonld_get_instance = PingMethodCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(PingMethodCodeJsonldGet.to_json())

# convert the object into a dict
ping_method_code_jsonld_get_dict = ping_method_code_jsonld_get_instance.to_dict()
# create an instance of PingMethodCodeJsonldGet from a dict
ping_method_code_jsonld_get_from_dict = PingMethodCodeJsonldGet.from_dict(ping_method_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


