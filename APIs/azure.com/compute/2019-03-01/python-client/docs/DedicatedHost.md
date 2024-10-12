# DedicatedHost

Specifies information about the Dedicated host.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedHostProperties**](DedicatedHostProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_host import DedicatedHost

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHost from a JSON string
dedicated_host_instance = DedicatedHost.from_json(json)
# print the JSON string representation of the object
print(DedicatedHost.to_json())

# convert the object into a dict
dedicated_host_dict = dedicated_host_instance.to_dict()
# create an instance of DedicatedHost from a dict
dedicated_host_from_dict = DedicatedHost.from_dict(dedicated_host_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


