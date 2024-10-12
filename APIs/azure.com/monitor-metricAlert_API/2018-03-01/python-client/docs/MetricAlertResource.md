# MetricAlertResource

The metric alert resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MetricAlertProperties**](MetricAlertProperties.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.metric_alert_resource import MetricAlertResource

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertResource from a JSON string
metric_alert_resource_instance = MetricAlertResource.from_json(json)
# print the JSON string representation of the object
print(MetricAlertResource.to_json())

# convert the object into a dict
metric_alert_resource_dict = metric_alert_resource_instance.to_dict()
# create an instance of MetricAlertResource from a dict
metric_alert_resource_from_dict = MetricAlertResource.from_dict(metric_alert_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


