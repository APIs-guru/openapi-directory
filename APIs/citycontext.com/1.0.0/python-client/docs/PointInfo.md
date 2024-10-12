# PointInfo

Contextual information around a given point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**Location**](Location.md) |  | 
**lsoa** | [**PointInfoLsoa**](PointInfoLsoa.md) |  | [optional] 
**parks** | [**List[PointInfoParksInner]**](PointInfoParksInner.md) | Parks within 1km of the point of interest, sorted by descending area | 
**schools** | [**List[PointInfoSchoolsInner]**](PointInfoSchoolsInner.md) | Schools within 1km of the point of interest, sorted by ascending distance from the POI | 

## Example

```python
from openapi_client.models.point_info import PointInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PointInfo from a JSON string
point_info_instance = PointInfo.from_json(json)
# print the JSON string representation of the object
print(PointInfo.to_json())

# convert the object into a dict
point_info_dict = point_info_instance.to_dict()
# create an instance of PointInfo from a dict
point_info_from_dict = PointInfo.from_dict(point_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


