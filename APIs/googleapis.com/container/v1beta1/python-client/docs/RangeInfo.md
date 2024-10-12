# RangeInfo

RangeInfo contains the range name and the range utilization by this cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range_name** | **str** | Output only. [Output only] Name of a range. | [optional] [readonly] 
**utilization** | **float** | Output only. [Output only] The utilization of the range. | [optional] [readonly] 

## Example

```python
from openapi_client.models.range_info import RangeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RangeInfo from a JSON string
range_info_instance = RangeInfo.from_json(json)
# print the JSON string representation of the object
print(RangeInfo.to_json())

# convert the object into a dict
range_info_dict = range_info_instance.to_dict()
# create an instance of RangeInfo from a dict
range_info_from_dict = RangeInfo.from_dict(range_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


