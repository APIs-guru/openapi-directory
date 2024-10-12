# PointPointMinutelyPrecipitationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | Datetime in YYYY-MM-DDTHH:MM:SS format. | [optional] 
**precipitation** | **float** | Minutely precipitation amount (per hour). For the startup tier, showing one value per 10 minutes. For other tiers, showing one value per each minute.  Unit: mm/h | [optional] 

## Example

```python
from openapi_client.models.point_point_minutely_precipitation_data import PointPointMinutelyPrecipitationData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointMinutelyPrecipitationData from a JSON string
point_point_minutely_precipitation_data_instance = PointPointMinutelyPrecipitationData.from_json(json)
# print the JSON string representation of the object
print(PointPointMinutelyPrecipitationData.to_json())

# convert the object into a dict
point_point_minutely_precipitation_data_dict = point_point_minutely_precipitation_data_instance.to_dict()
# create an instance of PointPointMinutelyPrecipitationData from a dict
point_point_minutely_precipitation_data_from_dict = PointPointMinutelyPrecipitationData.from_dict(point_point_minutely_precipitation_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


