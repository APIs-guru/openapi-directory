# LesserThreshold


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_values** | **bool** | If true, only alert if all values meet threshold. | [optional] 
**level** | [**CheckStatusLevel**](CheckStatusLevel.md) |  | [optional] 
**type** | **str** |  | 
**value** | **float** |  | 

## Example

```python
from openapi_client.models.lesser_threshold import LesserThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of LesserThreshold from a JSON string
lesser_threshold_instance = LesserThreshold.from_json(json)
# print the JSON string representation of the object
print(LesserThreshold.to_json())

# convert the object into a dict
lesser_threshold_dict = lesser_threshold_instance.to_dict()
# create an instance of LesserThreshold from a dict
lesser_threshold_from_dict = LesserThreshold.from_dict(lesser_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


