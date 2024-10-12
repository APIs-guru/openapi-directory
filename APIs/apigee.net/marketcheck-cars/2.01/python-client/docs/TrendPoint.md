# TrendPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dom** | **float** | Days on Market | [optional] 
**miles** | **float** | Miles | [optional] 
**msrp** | **float** | MSRP | [optional] 
**price** | **float** | Price | [optional] 
**units** | **float** | Units | [optional] 

## Example

```python
from openapi_client.models.trend_point import TrendPoint

# TODO update the JSON string below
json = "{}"
# create an instance of TrendPoint from a JSON string
trend_point_instance = TrendPoint.from_json(json)
# print the JSON string representation of the object
print(TrendPoint.to_json())

# convert the object into a dict
trend_point_dict = trend_point_instance.to_dict()
# create an instance of TrendPoint from a dict
trend_point_from_dict = TrendPoint.from_dict(trend_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


