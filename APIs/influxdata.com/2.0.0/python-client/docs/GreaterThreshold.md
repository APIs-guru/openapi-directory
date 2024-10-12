# GreaterThreshold


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_values** | **bool** | If true, only alert if all values meet threshold. | [optional] 
**level** | [**CheckStatusLevel**](CheckStatusLevel.md) |  | [optional] 
**type** | **str** |  | 
**value** | **float** |  | 

## Example

```python
from openapi_client.models.greater_threshold import GreaterThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of GreaterThreshold from a JSON string
greater_threshold_instance = GreaterThreshold.from_json(json)
# print the JSON string representation of the object
print(GreaterThreshold.to_json())

# convert the object into a dict
greater_threshold_dict = greater_threshold_instance.to_dict()
# create an instance of GreaterThreshold from a dict
greater_threshold_from_dict = GreaterThreshold.from_dict(greater_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


