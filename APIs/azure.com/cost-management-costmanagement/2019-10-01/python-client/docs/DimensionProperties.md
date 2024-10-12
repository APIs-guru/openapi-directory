# DimensionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Dimension category. | [optional] [readonly] 
**data** | **List[str]** |  | [optional] 
**description** | **str** | Dimension description. | [optional] [readonly] 
**filter_enabled** | **bool** | Filter enabled. | [optional] [readonly] 
**grouping_enabled** | **bool** | Grouping enabled. | [optional] [readonly] 
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**total** | **int** | Total number of data for the dimension. | [optional] [readonly] 
**usage_end** | **datetime** | Usage end. | [optional] [readonly] 
**usage_start** | **datetime** | Usage start. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dimension_properties import DimensionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionProperties from a JSON string
dimension_properties_instance = DimensionProperties.from_json(json)
# print the JSON string representation of the object
print(DimensionProperties.to_json())

# convert the object into a dict
dimension_properties_dict = dimension_properties_instance.to_dict()
# create an instance of DimensionProperties from a dict
dimension_properties_from_dict = DimensionProperties.from_dict(dimension_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


