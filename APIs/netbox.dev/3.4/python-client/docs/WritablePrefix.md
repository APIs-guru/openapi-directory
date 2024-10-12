# WritablePrefix


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**children** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**family** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**is_pool** | **bool** | All IP addresses within this prefix are considered usable | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mark_utilized** | **bool** | Treat as 100% utilized | [optional] 
**prefix** | **str** | IPv4 or IPv6 network with mask | 
**role** | **int** | The primary function of this prefix | [optional] 
**site** | **int** |  | [optional] 
**status** | **str** | Operational status of this prefix | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vlan** | **int** |  | [optional] 
**vrf** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_prefix import WritablePrefix

# TODO update the JSON string below
json = "{}"
# create an instance of WritablePrefix from a JSON string
writable_prefix_instance = WritablePrefix.from_json(json)
# print the JSON string representation of the object
print(WritablePrefix.to_json())

# convert the object into a dict
writable_prefix_dict = writable_prefix_instance.to_dict()
# create an instance of WritablePrefix from a dict
writable_prefix_from_dict = WritablePrefix.from_dict(writable_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


