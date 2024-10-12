# PercentageCostThresholdProperties

Properties of a percentage cost threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threshold_value** | **float** | The cost threshold value. | [optional] 

## Example

```python
from openapi_client.models.percentage_cost_threshold_properties import PercentageCostThresholdProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PercentageCostThresholdProperties from a JSON string
percentage_cost_threshold_properties_instance = PercentageCostThresholdProperties.from_json(json)
# print the JSON string representation of the object
print(PercentageCostThresholdProperties.to_json())

# convert the object into a dict
percentage_cost_threshold_properties_dict = percentage_cost_threshold_properties_instance.to_dict()
# create an instance of PercentageCostThresholdProperties from a dict
percentage_cost_threshold_properties_from_dict = PercentageCostThresholdProperties.from_dict(percentage_cost_threshold_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


