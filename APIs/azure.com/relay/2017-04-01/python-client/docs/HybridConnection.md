# HybridConnection

Description of hybrid connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Properties of the HybridConnection. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hybrid_connection import HybridConnection

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnection from a JSON string
hybrid_connection_instance = HybridConnection.from_json(json)
# print the JSON string representation of the object
print(HybridConnection.to_json())

# convert the object into a dict
hybrid_connection_dict = hybrid_connection_instance.to_dict()
# create an instance of HybridConnection from a dict
hybrid_connection_from_dict = HybridConnection.from_dict(hybrid_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


