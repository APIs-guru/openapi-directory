# WritableRegion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**site_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_region import WritableRegion

# TODO update the JSON string below
json = "{}"
# create an instance of WritableRegion from a JSON string
writable_region_instance = WritableRegion.from_json(json)
# print the JSON string representation of the object
print(WritableRegion.to_json())

# convert the object into a dict
writable_region_dict = writable_region_instance.to_dict()
# create an instance of WritableRegion from a dict
writable_region_from_dict = WritableRegion.from_dict(writable_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


