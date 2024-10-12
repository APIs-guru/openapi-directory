# VirtualHub

VirtualHub Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**VirtualHubProperties**](VirtualHubProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_hub import VirtualHub

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHub from a JSON string
virtual_hub_instance = VirtualHub.from_json(json)
# print the JSON string representation of the object
print(VirtualHub.to_json())

# convert the object into a dict
virtual_hub_dict = virtual_hub_instance.to_dict()
# create an instance of VirtualHub from a dict
virtual_hub_from_dict = VirtualHub.from_dict(virtual_hub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


