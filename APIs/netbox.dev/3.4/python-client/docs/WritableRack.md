# WritableRack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_tag** | **str** | A unique tag used to identify this rack | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**desc_units** | **bool** | Units are numbered top-to-bottom | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**facility_id** | **str** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**location** | **int** |  | [optional] 
**max_weight** | **int** | Maximum load capacity for the rack | [optional] 
**mounting_depth** | **int** | Maximum depth of a mounted device, in millimeters. For four-post racks, this is the distance between the front and rear rails. | [optional] 
**name** | **str** |  | 
**outer_depth** | **int** | Outer dimension of rack (depth) | [optional] 
**outer_unit** | **str** |  | [optional] 
**outer_width** | **int** | Outer dimension of rack (width) | [optional] 
**powerfeed_count** | **int** |  | [optional] [readonly] 
**role** | **int** | Functional role | [optional] 
**serial** | **str** |  | [optional] 
**site** | **int** |  | 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**u_height** | **int** | Height in rack units | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 
**width** | **int** | Rail-to-rail width | [optional] 

## Example

```python
from openapi_client.models.writable_rack import WritableRack

# TODO update the JSON string below
json = "{}"
# create an instance of WritableRack from a JSON string
writable_rack_instance = WritableRack.from_json(json)
# print the JSON string representation of the object
print(WritableRack.to_json())

# convert the object into a dict
writable_rack_dict = writable_rack_instance.to_dict()
# create an instance of WritableRack from a dict
writable_rack_from_dict = WritableRack.from_dict(writable_rack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


