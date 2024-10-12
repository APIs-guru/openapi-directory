# Threshold


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_values** | **bool** | If true, only alert if all values meet threshold. | [optional] 
**level** | [**CheckStatusLevel**](CheckStatusLevel.md) |  | [optional] 
**type** | **str** |  | 
**value** | **float** |  | 
**max** | **float** |  | 
**min** | **float** |  | 
**within** | **bool** |  | 

## Example

```python
from openapi_client.models.threshold import Threshold

# TODO update the JSON string below
json = "{}"
# create an instance of Threshold from a JSON string
threshold_instance = Threshold.from_json(json)
# print the JSON string representation of the object
print(Threshold.to_json())

# convert the object into a dict
threshold_dict = threshold_instance.to_dict()
# create an instance of Threshold from a dict
threshold_from_dict = Threshold.from_dict(threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


