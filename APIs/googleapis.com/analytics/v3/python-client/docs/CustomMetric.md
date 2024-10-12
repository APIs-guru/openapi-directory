# CustomMetric

JSON template for Analytics Custom Metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID. | [optional] 
**active** | **bool** | Boolean indicating whether the custom metric is active. | [optional] 
**created** | **datetime** | Time the custom metric was created. | [optional] [readonly] 
**id** | **str** | Custom metric ID. | [optional] 
**index** | **int** | Index of the custom metric. | [optional] [readonly] 
**kind** | **str** | Kind value for a custom metric. Set to \&quot;analytics#customMetric\&quot;. It is a read-only field. | [optional] [readonly] [default to 'analytics#customMetric']
**max_value** | **str** | Max value of custom metric. | [optional] 
**min_value** | **str** | Min value of custom metric. | [optional] 
**name** | **str** | Name of the custom metric. | [optional] 
**parent_link** | [**CustomMetricParentLink**](CustomMetricParentLink.md) |  | [optional] 
**scope** | **str** | Scope of the custom metric: HIT or PRODUCT. | [optional] 
**self_link** | **str** | Link for the custom metric | [optional] [readonly] 
**type** | **str** | Data type of custom metric. | [optional] 
**updated** | **datetime** | Time the custom metric was last modified. | [optional] [readonly] 
**web_property_id** | **str** | Property ID. | [optional] 

## Example

```python
from openapi_client.models.custom_metric import CustomMetric

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMetric from a JSON string
custom_metric_instance = CustomMetric.from_json(json)
# print the JSON string representation of the object
print(CustomMetric.to_json())

# convert the object into a dict
custom_metric_dict = custom_metric_instance.to_dict()
# create an instance of CustomMetric from a dict
custom_metric_from_dict = CustomMetric.from_dict(custom_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


