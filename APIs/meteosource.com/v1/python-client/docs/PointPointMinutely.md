# PointPointMinutely


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PointPointMinutelyPrecipitationData]**](PointPointMinutelyPrecipitationData.md) |  | 
**summary** | **str** | Text summary about upcoming precipitation. Unit: summary | [optional] 

## Example

```python
from openapi_client.models.point_point_minutely import PointPointMinutely

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointMinutely from a JSON string
point_point_minutely_instance = PointPointMinutely.from_json(json)
# print the JSON string representation of the object
print(PointPointMinutely.to_json())

# convert the object into a dict
point_point_minutely_dict = point_point_minutely_instance.to_dict()
# create an instance of PointPointMinutely from a dict
point_point_minutely_from_dict = PointPointMinutely.from_dict(point_point_minutely_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


