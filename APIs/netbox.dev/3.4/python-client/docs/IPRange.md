# IPRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**end_address** | **str** | IPv4 or IPv6 address (with mask) | 
**family** | [**Family**](Family.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**role** | [**NestedRole**](NestedRole.md) |  | [optional] 
**size** | **int** |  | [optional] [readonly] 
**start_address** | **str** | IPv4 or IPv6 address (with mask) | 
**status** | [**Status5**](Status5.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 

## Example

```python
from openapi_client.models.ip_range import IPRange

# TODO update the JSON string below
json = "{}"
# create an instance of IPRange from a JSON string
ip_range_instance = IPRange.from_json(json)
# print the JSON string representation of the object
print(IPRange.to_json())

# convert the object into a dict
ip_range_dict = ip_range_instance.to_dict()
# create an instance of IPRange from a dict
ip_range_from_dict = IPRange.from_dict(ip_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


