# PointInfoParksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_sqm** | **int** |  | 
**centroid** | **object** |  | 
**distance_meters** | **int** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.point_info_parks_inner import PointInfoParksInner

# TODO update the JSON string below
json = "{}"
# create an instance of PointInfoParksInner from a JSON string
point_info_parks_inner_instance = PointInfoParksInner.from_json(json)
# print the JSON string representation of the object
print(PointInfoParksInner.to_json())

# convert the object into a dict
point_info_parks_inner_dict = point_info_parks_inner_instance.to_dict()
# create an instance of PointInfoParksInner from a dict
point_info_parks_inner_from_dict = PointInfoParksInner.from_dict(point_info_parks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


