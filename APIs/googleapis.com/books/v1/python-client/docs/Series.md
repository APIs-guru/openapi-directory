# Series


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource type. | [optional] 
**series** | [**List[SeriesSeriesInner]**](SeriesSeriesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.series import Series

# TODO update the JSON string below
json = "{}"
# create an instance of Series from a JSON string
series_instance = Series.from_json(json)
# print the JSON string representation of the object
print(Series.to_json())

# convert the object into a dict
series_dict = series_instance.to_dict()
# create an instance of Series from a dict
series_from_dict = Series.from_dict(series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


