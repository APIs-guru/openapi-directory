# MetricGroup

 The metric group details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for the group. | [optional] 
**invisible_for_ui** | **bool** | indicates if the metric group is displayed in Azure Active Directory Connect Health UI. | [optional] 
**key** | **str** | The key for the group. | [optional] 

## Example

```python
from openapi_client.models.metric_group import MetricGroup

# TODO update the JSON string below
json = "{}"
# create an instance of MetricGroup from a JSON string
metric_group_instance = MetricGroup.from_json(json)
# print the JSON string representation of the object
print(MetricGroup.to_json())

# convert the object into a dict
metric_group_dict = metric_group_instance.to_dict()
# create an instance of MetricGroup from a dict
metric_group_from_dict = MetricGroup.from_dict(metric_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


