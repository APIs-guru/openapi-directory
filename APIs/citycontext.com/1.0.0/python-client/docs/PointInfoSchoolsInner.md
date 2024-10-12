# PointInfoSchoolsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance_meters** | **int** |  | 
**last_inpection_url** | **str** | URL to the last inspection report | 
**last_inspection_date** | **datetime** | Date of the last Ofsted inspection | 
**leadership_and_management** | **int** | Leadership and management grade in the last Ofsted report, from 1 (outstanding) to 4 (inadequate) | 
**location** | **object** |  | 
**overall_effectiveness** | **int** | Overall effectiveness grade in the last Ofsted report, from 1 (outstanding) to 4 (inadequate) | 
**phase** | **str** |  | 
**quality_of_teaching** | **int** | Quality of teaching grade in the last Ofsted report, from 1 (outstanding) to 4 (inadequate) | 
**school_name** | **str** |  | 
**type_of_establishment** | **str** |  | 
**urn** | **int** | Unique school identifier | 

## Example

```python
from openapi_client.models.point_info_schools_inner import PointInfoSchoolsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PointInfoSchoolsInner from a JSON string
point_info_schools_inner_instance = PointInfoSchoolsInner.from_json(json)
# print the JSON string representation of the object
print(PointInfoSchoolsInner.to_json())

# convert the object into a dict
point_info_schools_inner_dict = point_info_schools_inner_instance.to_dict()
# create an instance of PointInfoSchoolsInner from a dict
point_info_schools_inner_from_dict = PointInfoSchoolsInner.from_dict(point_info_schools_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


