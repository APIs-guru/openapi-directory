# RangeThreshold


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_values** | **bool** | If true, only alert if all values meet threshold. | [optional] 
**level** | [**CheckStatusLevel**](CheckStatusLevel.md) |  | [optional] 
**max** | **float** |  | 
**min** | **float** |  | 
**type** | **str** |  | 
**within** | **bool** |  | 

## Example

```python
from openapi_client.models.range_threshold import RangeThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of RangeThreshold from a JSON string
range_threshold_instance = RangeThreshold.from_json(json)
# print the JSON string representation of the object
print(RangeThreshold.to_json())

# convert the object into a dict
range_threshold_dict = range_threshold_instance.to_dict()
# create an instance of RangeThreshold from a dict
range_threshold_from_dict = RangeThreshold.from_dict(range_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


