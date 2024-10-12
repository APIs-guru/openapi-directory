# Threshold

Defines a threshold for categorizing time series values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | The state color for this threshold. Color is not allowed in a XyChart. | [optional] 
**direction** | **str** | The direction for the current threshold. Direction is not allowed in a XyChart. | [optional] 
**label** | **str** | A label for the threshold. | [optional] 
**target_axis** | **str** | The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. | [optional] 
**value** | **float** | The value of the threshold. The value should be defined in the native scale of the metric. | [optional] 

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


