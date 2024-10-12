# WritableSite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asns** | **List[int]** |  | [optional] 
**circuit_count** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**facility** | **str** | Local facility ID or description | [optional] 
**group** | **int** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**latitude** | **float** | GPS coordinate (latitude) | [optional] 
**longitude** | **float** | GPS coordinate (longitude) | [optional] 
**name** | **str** |  | 
**physical_address** | **str** |  | [optional] 
**prefix_count** | **int** |  | [optional] [readonly] 
**rack_count** | **int** |  | [optional] [readonly] 
**region** | **int** |  | [optional] 
**shipping_address** | **str** |  | [optional] 
**slug** | **str** |  | 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 
**vlan_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_site import WritableSite

# TODO update the JSON string below
json = "{}"
# create an instance of WritableSite from a JSON string
writable_site_instance = WritableSite.from_json(json)
# print the JSON string representation of the object
print(WritableSite.to_json())

# convert the object into a dict
writable_site_dict = writable_site_instance.to_dict()
# create an instance of WritableSite from a dict
writable_site_from_dict = WritableSite.from_dict(writable_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


