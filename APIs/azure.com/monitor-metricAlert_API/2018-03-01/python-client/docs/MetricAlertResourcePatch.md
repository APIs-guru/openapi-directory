# MetricAlertResourcePatch

The metric alert resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MetricAlertProperties**](MetricAlertProperties.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.metric_alert_resource_patch import MetricAlertResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertResourcePatch from a JSON string
metric_alert_resource_patch_instance = MetricAlertResourcePatch.from_json(json)
# print the JSON string representation of the object
print(MetricAlertResourcePatch.to_json())

# convert the object into a dict
metric_alert_resource_patch_dict = metric_alert_resource_patch_instance.to_dict()
# create an instance of MetricAlertResourcePatch from a dict
metric_alert_resource_patch_from_dict = MetricAlertResourcePatch.from_dict(metric_alert_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


