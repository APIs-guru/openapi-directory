# WritableASN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **int** | 32-bit autonomous system number | 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**provider_count** | **int** |  | [optional] [readonly] 
**rir** | **int** |  | 
**site_count** | **int** |  | [optional] [readonly] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_asn import WritableASN

# TODO update the JSON string below
json = "{}"
# create an instance of WritableASN from a JSON string
writable_asn_instance = WritableASN.from_json(json)
# print the JSON string representation of the object
print(WritableASN.to_json())

# convert the object into a dict
writable_asn_dict = writable_asn_instance.to_dict()
# create an instance of WritableASN from a dict
writable_asn_from_dict = WritableASN.from_dict(writable_asn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


