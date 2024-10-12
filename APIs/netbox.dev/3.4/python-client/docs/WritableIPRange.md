# WritableIPRange


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
**family** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**role** | **int** | The primary function of this range | [optional] 
**size** | **int** |  | [optional] [readonly] 
**start_address** | **str** | IPv4 or IPv6 address (with mask) | 
**status** | **str** | Operational status of this range | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vrf** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_ip_range import WritableIPRange

# TODO update the JSON string below
json = "{}"
# create an instance of WritableIPRange from a JSON string
writable_ip_range_instance = WritableIPRange.from_json(json)
# print the JSON string representation of the object
print(WritableIPRange.to_json())

# convert the object into a dict
writable_ip_range_dict = writable_ip_range_instance.to_dict()
# create an instance of WritableIPRange from a dict
writable_ip_range_from_dict = WritableIPRange.from_dict(writable_ip_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


