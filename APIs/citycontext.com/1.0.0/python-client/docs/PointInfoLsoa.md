# PointInfoLsoa

Statistics for lower layer super output areas (LSOA)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crimes** | **object** |  | [optional] 
**name** | **str** |  | 
**population** | [**PointInfoLsoaPopulation**](PointInfoLsoaPopulation.md) |  | [optional] 

## Example

```python
from openapi_client.models.point_info_lsoa import PointInfoLsoa

# TODO update the JSON string below
json = "{}"
# create an instance of PointInfoLsoa from a JSON string
point_info_lsoa_instance = PointInfoLsoa.from_json(json)
# print the JSON string representation of the object
print(PointInfoLsoa.to_json())

# convert the object into a dict
point_info_lsoa_dict = point_info_lsoa_instance.to_dict()
# create an instance of PointInfoLsoa from a dict
point_info_lsoa_from_dict = PointInfoLsoa.from_dict(point_info_lsoa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


