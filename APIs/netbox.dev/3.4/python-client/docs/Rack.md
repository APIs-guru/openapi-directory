# Rack


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
**location** | [**NestedLocation**](NestedLocation.md) |  | [optional] 
**max_weight** | **int** | Maximum load capacity for the rack | [optional] 
**mounting_depth** | **int** | Maximum depth of a mounted device, in millimeters. For four-post racks, this is the distance between the front and rear rails. | [optional] 
**name** | **str** |  | 
**outer_depth** | **int** | Outer dimension of rack (depth) | [optional] 
**outer_unit** | [**OuterUnit**](OuterUnit.md) |  | [optional] 
**outer_width** | **int** | Outer dimension of rack (width) | [optional] 
**powerfeed_count** | **int** |  | [optional] [readonly] 
**role** | [**NestedRackRole**](NestedRackRole.md) |  | [optional] 
**serial** | **str** |  | [optional] 
**site** | [**NestedSite**](NestedSite.md) |  | 
**status** | [**Status11**](Status11.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**type** | [**Type8**](Type8.md) |  | [optional] 
**u_height** | **int** | Height in rack units | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **float** |  | [optional] 
**weight_unit** | [**WeightUnit**](WeightUnit.md) |  | [optional] 
**width** | [**Width**](Width.md) |  | [optional] 

## Example

```python
from openapi_client.models.rack import Rack

# TODO update the JSON string below
json = "{}"
# create an instance of Rack from a JSON string
rack_instance = Rack.from_json(json)
# print the JSON string representation of the object
print(Rack.to_json())

# convert the object into a dict
rack_dict = rack_instance.to_dict()
# create an instance of Rack from a dict
rack_from_dict = Rack.from_dict(rack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


